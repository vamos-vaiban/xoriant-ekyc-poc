package com.kotak.ekyc.config;

import com.kotak.ekyc.model.UserAuthentication;
import com.kotak.ekyc.repository.UserAuthenticationRepository;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

    @Resource
    UserAuthenticationRepository userAuthenticationRepository;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        final String username = authentication.getPrincipal() == null ? "NONE_PROVIDED" : authentication.getName();
        if (username.isEmpty()) {
            throw new BadCredentialsException("Invalid Login Details");
        }
        Optional<UserAuthentication> userAuthentication = null;
        userAuthentication = Optional.ofNullable(userAuthenticationRepository.findByMobileNumber(username).orElseThrow(() -> new BadCredentialsException("Mobile Number not registered")));
        return createSuccessfulAuthentication(authentication, userAuthentication);
    }

    private Authentication createSuccessfulAuthentication(final Authentication authentication, final Optional<UserAuthentication> userAuthentication) {
        UserAuthentication userAuthentication1 = userAuthentication.get();
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = null;
        List<GrantedAuthority> grantedAuths = new ArrayList<>();
        grantedAuths.add(new SimpleGrantedAuthority("ROLE_USER"));
        if (authentication.getPrincipal().equals(userAuthentication1.getMobileNumber()) && authentication.getCredentials().equals(userAuthentication1.getMobileNumberOtp())) {
            usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userAuthentication1.getMobileNumber(), userAuthentication1.getMobileNumberOtp(), grantedAuths);
            usernamePasswordAuthenticationToken.setDetails(authentication.getDetails());
        } else {
            usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(authentication.getPrincipal(), authentication.getCredentials());
        }
        return usernamePasswordAuthenticationToken;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}


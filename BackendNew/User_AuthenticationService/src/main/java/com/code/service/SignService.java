package com.code.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.model.SingleSign;
import com.code.repository.SignRepository;

@Service
public class SignService implements SignRepository {

	@Autowired
	private SignRepository signRepository;

	public List<SingleSign> getAllDetails() {
		List<SingleSign> listOfDetails = new ArrayList<SingleSign>();
		signRepository.findAll();
		return listOfDetails;
	}

	public SingleSign getAllDetailsById(int id) {
		return signRepository.findById(id).get();
	}

	public void saveOrUpdate(SingleSign singleSign) {
		signRepository.save(singleSign);
	}

	public void delete(int id) {
		signRepository.deleteById(id);
	}

	public void update(SingleSign singleSign) {
		signRepository.save(singleSign);
	}

	public boolean isDataExist(int id) {
		return signRepository.existsById(id);
	}

	public <S extends SingleSign> S save(S entity) {
		// TODO Auto-generated method stub
		return null;
	}

	public <S extends SingleSign> Iterable<S> saveAll(Iterable<S> entities) {
		// TODO Auto-generated method stub
		return null;
	}

	public Optional<SingleSign> findById(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	public boolean existsById(Integer id) {
		// TODO Auto-generated method stub
		return false;
	}

	public Iterable<SingleSign> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	public Iterable<SingleSign> findAllById(Iterable<Integer> ids) {
		// TODO Auto-generated method stub
		return null;
	}

	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}

	public void deleteById(Integer id) {
		// TODO Auto-generated method stub
		
	}

	public void delete(SingleSign entity) {
		// TODO Auto-generated method stub
		
	}

	public void deleteAllById(Iterable<? extends Integer> ids) {
		// TODO Auto-generated method stub
		
	}

	public void deleteAll(Iterable<? extends SingleSign> entities) {
		// TODO Auto-generated method stub
		
	}

	public void deleteAll() {
		// TODO Auto-generated method stub
		
	}

	/*
	 * public Optional<SingleSign> findByRequestId(int request_Id) { return
	 * signRepository.findById(request_Id); }
	 */
}

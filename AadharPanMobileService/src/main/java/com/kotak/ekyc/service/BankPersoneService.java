package com.kotak.ekyc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.kotak.ekyc.model.BankPersoneReport;

@Service
public interface BankPersoneService {
    public List<BankPersoneReport> getData();
}
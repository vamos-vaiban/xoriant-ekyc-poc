package com.kotak.ekyc.repository;

import com.kotak.ekyc.model.Video;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VideoServiceRepository extends CrudRepository<Video,Long> {

}

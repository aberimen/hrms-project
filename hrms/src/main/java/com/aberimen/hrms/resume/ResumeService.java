package com.aberimen.hrms.resume;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.aberimen.hrms.config.CloudinaryConfig;
import com.cloudinary.Cloudinary;
import com.cloudinary.Transformation;
import com.cloudinary.utils.ObjectUtils;

@Service
public class ResumeService {

	private ResumeRepository resumeRepository;
	private CloudinaryConfig cloudinaryConfig;
	private Cloudinary cloudinary;

	public ResumeService(ResumeRepository resumeRepository, CloudinaryConfig cloudinaryConfig) {
		super();
		this.resumeRepository = resumeRepository;
		this.cloudinaryConfig = cloudinaryConfig;
		cloudinary = new Cloudinary(cloudinaryConfig.getCloudinaryURL());
	}

	public List<Resume> getCandidateProfile(long userId) {
		// TODO Auto-generated method stub
		return null;
	}

	public void saveEducation(long userId) {
		// TODO Auto-generated method stub

	}

	public void saveExperience(long userId) {
		// TODO Auto-generated method stub

	}

	public void saveLanguageSkill(long userId) {
		// TODO Auto-generated method stub

	}

	public void saveTechnicalSkill(long userId) {
		// TODO Auto-generated method stub

	}

	public void saveProfileImage(MultipartFile multipartFile, long resumeId) {
		Optional<Resume> resumeInDBOptional = resumeRepository.findById(resumeId);
		
		if(!resumeInDBOptional.isPresent()) {
			return;
		}
		
		Resume resumeInDB = resumeInDBOptional.get();
		File file = convertMultiPartToFile(multipartFile);
		
		try {
			
			Map uploadFile = cloudinary.uploader().uploadLarge(file, ObjectUtils.asMap("transformation",
                    new Transformation().crop("limit").width(3000).height(2000)));
			
			resumeInDB.setProfileImage((String) uploadFile.get("url"));
			resumeRepository.save(resumeInDB);
			
			file.delete();
			
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	private File convertMultiPartToFile(MultipartFile file) {
		File target = new File(file.getOriginalFilename());

		try {
			OutputStream fos = new FileOutputStream(target);
			fos.write(file.getBytes());
			fos.close();
		} catch (IOException e) {

			e.printStackTrace();
		}

		return target;
	}

}

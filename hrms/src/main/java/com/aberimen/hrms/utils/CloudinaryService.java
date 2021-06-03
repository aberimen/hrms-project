package com.aberimen.hrms.utils;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.aberimen.hrms.config.CloudinaryConfig;
import com.cloudinary.Cloudinary;
import com.cloudinary.Transformation;
import com.cloudinary.utils.ObjectUtils;

@Service
@SuppressWarnings("rawtypes")
public class CloudinaryService {

	CloudinaryConfig cloudinaryConfig;
	Cloudinary cloudinary;

	public CloudinaryService(CloudinaryConfig cloudinaryConfig) {
		super();
		this.cloudinaryConfig = cloudinaryConfig;
		initCloudinary();
	}

	public void initCloudinary() {
		cloudinary = new Cloudinary(cloudinaryConfig.getCloudinaryURL());
	}

	public Map upload(MultipartFile multipartFile) throws IOException {
		File file = convertMultiPartToFile(multipartFile);

		Map result = cloudinary.uploader().uploadLarge(file,
				ObjectUtils.asMap("transformation", new Transformation().crop("limit").width(3000).height(2000)));

		file.delete();
		return result;

	}

	private File convertMultiPartToFile(MultipartFile multipartFile) {
		File file = new File(multipartFile.getOriginalFilename());

		try {
			OutputStream outputStream = new FileOutputStream(file);
			outputStream.write(multipartFile.getBytes());
			outputStream.close();
		} catch (IOException e) {

			e.printStackTrace();
		}

		return file;
	}
}

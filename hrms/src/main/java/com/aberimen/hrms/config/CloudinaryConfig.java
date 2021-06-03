package com.aberimen.hrms.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "cloudinary") // application.yml dosyasında ön eki cloudinary olan özellikleri alıyor
public class CloudinaryConfig {

	private String cloudName;
	
	private String apiKey;
	
	private String apiSecret;
	
	private boolean enhanceImageTag;
	
	private boolean staticFileSupport;

	public String getCloudinaryURL() {
		return  "cloudinary://"+apiKey+":"+apiSecret+"@"+cloudName; 
	}
	public String getCloudName() {
		return cloudName;
	}

	public void setCloudName(String cloudName) {
		this.cloudName = cloudName;
	}

	public String getApiKey() {
		return apiKey;
	}

	public void setApiKey(String apiKey) {
		this.apiKey = apiKey;
	}

	public String getApiSecret() {
		return apiSecret;
	}

	public void setApiSecret(String apiSecret) {
		this.apiSecret = apiSecret;
	}

	public boolean isEnhanceImageTag() {
		return enhanceImageTag;
	}

	public void setEnhanceImageTag(boolean enhanceImageTag) {
		this.enhanceImageTag = enhanceImageTag;
	}

	public boolean isStaticFileSupport() {
		return staticFileSupport;
	}

	public void setStaticFileSupport(boolean staticFileSupport) {
		this.staticFileSupport = staticFileSupport;
	}

	
}

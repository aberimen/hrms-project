package com.aberimen.hrms;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;

import com.aberimen.hrms.employer.EmployerService;
import com.aberimen.hrms.employer.dto.EmployerRegisterDTO;
import com.aberimen.hrms.jobposition.JobPosition;
import com.aberimen.hrms.jobposition.JobPositionRepository;
import com.aberimen.hrms.jobposting.JobPostingService;
import com.aberimen.hrms.jobposting.dto.JobPostingDTO;
import com.aberimen.hrms.location.Location;
import com.aberimen.hrms.location.LocationRepository;

@SpringBootApplication
public class HrmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(HrmsApplication.class, args);
	}
	
	@Bean
	CommandLineRunner initData(EmployerService employerService, 
			LocationRepository locationRepository, JobPositionRepository 
			jobPositionRepository, JobPostingService jobPostingService) {
		
		return (String... args) -> {
			
			//init locations
			String [] sehirler = {"Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "İçel (Mersin)", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"};
			int sehirID = 1;
			for (String sehir : sehirler) {
				Location location = new Location();
				location.setId(sehirID++);
				location.setCity(sehir);
				
				locationRepository.save(location);	
			}
			

			//init job positions
			
			String[] jobPositions = { "Java Developer", "Backend Developer", "Frontend Developer", "React Developer", ".Net Developer","Python Developer"};
			
			for (String position : jobPositions) {
				JobPosition jobPosition = new JobPosition();
				jobPosition.setPositionName(position);
				jobPositionRepository.save(jobPosition);
			}
			
			//init employers
			for(int i=1; i < 10; i++) {
				EmployerRegisterDTO employer = new  EmployerRegisterDTO();
				employer.setCompany("Firma " + i);
				employer.setWebSite("www.firma"+i+".com");
				employer.setEmail("info@firma"+i+".com");
				employer.setPassword("1234");
				employer.setPhoneNumber("1234567899");
				HttpStatus statusCode = employerService.saveEmployer(employer).getStatusCode();
				
				System.out.println(statusCode.value());
				
				//init job postings for each company
				for (int j = 1; j < 5; j++) {
					JobPostingDTO jobPostingDTO = new JobPostingDTO();
					jobPostingDTO.setJobDescription("Firma " + i + " için iş ilanı" +j );
					jobPostingDTO.setEmployerId(i);
					jobPostingDTO.setLocationId(j);
					jobPostingDTO.setJobPositionId(j);
					jobPostingService.createJobPosting(jobPostingDTO);

				}
				
			}
		};
		
	}
	
	

}


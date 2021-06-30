package com.aberimen.hrms;

import java.time.LocalDateTime;

import org.modelmapper.ModelMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.aberimen.hrms.candidate.Candidate;
import com.aberimen.hrms.candidate.CandidateService;
import com.aberimen.hrms.common.department.Department;
import com.aberimen.hrms.common.department.DepartmentRepository;
import com.aberimen.hrms.common.language.Language;
import com.aberimen.hrms.common.language.LanguageRepository;
import com.aberimen.hrms.common.language.LanguageService;
import com.aberimen.hrms.common.location.Location;
import com.aberimen.hrms.common.location.LocationRepository;
import com.aberimen.hrms.common.university.University;
import com.aberimen.hrms.common.university.UniversityRepository;
import com.aberimen.hrms.common.university.UniversityService;
import com.aberimen.hrms.employer.Employer;
import com.aberimen.hrms.employer.EmployerService;
import com.aberimen.hrms.jobposition.JobPosition;
import com.aberimen.hrms.jobposition.JobPositionRepository;
import com.aberimen.hrms.jobposting.EmploymentType;
import com.aberimen.hrms.jobposting.JobPosting;
import com.aberimen.hrms.jobposting.JobPostingService;
import com.aberimen.hrms.resume.Resume;
import com.aberimen.hrms.resume.ResumeRepository;

@SpringBootApplication
public class HrmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(HrmsApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}

	@Bean
	CommandLineRunner initData(EmployerService employerService, LocationRepository locationRepository,
			JobPositionRepository jobPositionRepository, JobPostingService jobPostingService,
			ResumeRepository resumeRepository, CandidateService candidateService, LanguageRepository languageRepository,
			UniversityRepository universityRepository, DepartmentRepository departmentRepository) {

		return (String... args) -> {

			// init locations
			String[] sehirler = { "Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin",
					"Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale",
					"Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir",
					"Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "İçel (Mersin)", "İstanbul",
					"İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya",
					"Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize",
					"Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli",
					"Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale",
					"Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye",
					"Düzce" };
			int sehirID = 1;
			for (String sehir : sehirler) {
				Location location = new Location();
				location.setId(sehirID++);
				location.setCity(sehir);

				locationRepository.save(location);
			}

			String[] jobPositions = { "Java Developer", "Backend Developer", "Frontend Developer", "React Developer",
					".Net Developer", "Python Developer" };

			for (int i = 0; i < jobPositions.length; i++) {
				// init job positions
				JobPosition jobPosition = new JobPosition();
				jobPosition.setPositionName(jobPositions[i]);
				jobPositionRepository.save(jobPosition);

				// init employers
				Employer employer = new Employer();
				employer.setCompany("Firma " + i);
				employer.setWebsite("www.firma" + i + ".com");
				employer.setEmail("info@firma" + i + ".com");
				employer.setPassword("1234");
				employer.setPhoneNumber("1234567899");
				employerService.saveEmployer(employer);

				// init job postings for each company
				for (int j = 1; j < 5; j++) {
					JobPosting jobPosting = new JobPosting();
					jobPosting.setJobDescription("Firma " + i
							+ " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum");
					jobPosting.setEmployer(employer);
					jobPosting.setLocation(null);
					jobPosting.setActive(true);
					jobPosting.setEmploymentType(EmploymentType.FULLTIME);
					jobPosting.setCreatedAt(LocalDateTime.now());
					jobPosting.setJobPosition(jobPosition);
					jobPostingService.createJobPosting(jobPosting);

				}

			}

			Resume resume = new Resume();
			resume.setId(1);
			resumeRepository.save(resume);

			Candidate candidate = new Candidate();
			candidate.setName("Abdurrahman");
			candidate.setLastName("Berimen");
			candidate.setEmail("info@gmail.com");
			candidate.setNationalId("123456789");
			candidate.setPassword("pass123");
			candidate.setYearOfBirth("1997");

			candidateService.save(candidate);

			Language ing = new Language();
			ing.setLanguageName("İngilizce");
			languageRepository.save(ing);

			University university = new University();
			university.setName("Fırat Uni");
			universityRepository.save(university);
			
			Department yazilim = new Department();
			yazilim.setDepartmentName("Yazılım Mühendisliği");
			
			departmentRepository.save(yazilim);

		};

	}

}

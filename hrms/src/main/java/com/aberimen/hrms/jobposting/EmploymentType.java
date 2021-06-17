package com.aberimen.hrms.jobposting;

public enum EmploymentType {

	FULLTIME("Tam Zamanlı"), PARTTIME("Yarı Zamanlı"), FULLTIME_OR_PARTTIME("Tam Zamanlı veya Yarı Zamanlı");
	

    private final String text;

   
	EmploymentType(final String text) {
        this.text = text;
    }
	
	@Override
	public String toString() {
		
		return text;
	}

}

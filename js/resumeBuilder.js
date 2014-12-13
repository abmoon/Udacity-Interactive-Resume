var bio = {
    "name": "Abraham Luna",
    "role" : "Front-End Web Developer",
    "contacts" : {
    "email" : "avraham.luna@gmail.com",
    
    "mobile" : "(123)-456-789",
    "twitter": "_abluna",
    "location": "San Diego, California"
     },
    "skills" : ["Wordpress", "Bootstrap", "Javascript", "HTML", "CSS"],
    "picture" : ["images/me2.jpg"],
    "welcomeMsg" : "Welcome to my online resume."
};



var work = {
    "jobs" : [
    {
        "employer" : "Shamrock Design and Development ",
        "title" : "IT Consultant",
        "location" : "Escondido, California",
        "dates" : "2004-Present",
        "website" : "http://www.shamrock.us.com",
        "description" : "Help with computer maintenance, upgrade, and repair of a small network of computers." 
    },
    {
        "employer" : "Clinica Dental Madero",
        "title" : "Digital Marketing",
        "location" : "Tijuana, Mexico ",
        "dates" : " 2013-2014",
        "website" : "http://www.clinicadentalmadero.com",
        "description" : "Helped implement a social media strategy that included the integration of a website and social media platforms."
    },
    {
        "employer" : "Tijuana Geek",
        "title" : "Web Administrator",
        "location" : "Tijuana, Mexico",
        "dates" : "2008-2012",
        "website" : "http://tijuanageek.com/",
        "description" : " Helped to implement an manage e-commerce program for a local comic and anime store."
    }
    
      
 
    ] 
};



var projects = {
    "projects" : [
    {
    "title" : "Dental Clinic Website",
    "dates" : "2014",
    "description" : "Responsive parallax website for a local dental clinic built with in Wordpress .",
    "images" : ["images/cdm.png"],
    "githubURL" : "https://www.clinicadentalmadero.com"
    },
    {
    "title" : "Personal Blog ",
    "dates" : "2014",
    "description" : "Personal Blog design and developed with wordpress",
    "images" : ["images/acs1.png"],
    "githubURL" : "http://www.acontinousound.com"
    }
  ]
};

var education = {
    "schools" : [
    {
        "name" : "University of California San Diego",
        "location" : "San Diego , California",
        "degree" : "In progress",
        "majors" : ["Interdisciplinary Computing in the Arts"],
        "dates" : "2012-2014",
        "website" : "http://ucsd.edu/"
    },
    {
        "name" : "Southwestern College",
        "location" : "Chula Vista, California",
        "degree" : "Associate of Arts",
        "majors" : ["Music"],
        "dates" : "2002-2008",
        "website" : "http://www.swccd.edu/"
          
    }
  ],
    "onlineCourses" : [
    {
        "title" : "Web Design and Development",
        "school" : "Codeacademy",
        "dates" : "2012-2014",
        "website" : "http://www.codecademy.com/ab_luna",
        "url" : "http://www.codecademy.com/"
    },
    {
        "title" : "Front-End Web Developer Nanodegree",
        "school" : "Udacity",
        "dates" : "2014-2015",
        "website" : "https://www.udacity.com/course/nd001",
        "url" : "https://www.udacity.com/"
    }
  ]
};


bio.display = function() {
    var formattedBioPic = HTMLbioPic.replace("%data%",bio.picture[0]);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg);
    $("#header").append(formattedWelcomeMsg);

    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    $("#header").prepend(formattedName);
     var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
     $("#footerContacts").append(formattedMobile);
   
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
     $("#footerContacts").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
};

bio.display();



work.display = function() {
    for (var job in work.jobs) {
        // creat new div for work experience  
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        formattedEmployer = formattedEmployer.replace("#",work.jobs[job].website);        
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
};

work.display();


education.display = function() {
    for (var school in education.schools) {
        // create new div for education
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
        formattedSchoolName = formattedSchoolName.replace("#",education.schools[school].website);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchoolNameDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolMajor); 
    }

    if (education.onlineCourses.length > 0) {  
        $("#education").append(HTMLonlineClasses); 

        for (var course in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
            formattedOnlineTitle = formattedOnlineTitle.replace("#",education.onlineCourses[course].website);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(formattedOnlineTitleSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedOnlineDates);
       }
    }
};

education.display();


projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        formattedProjectTitle = formattedProjectTitle.replace("#",projects.projects[project].githubURL);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]); 
                $(".project-entry:last").append(formattedImage);
            }

        }
 
    }
};

projects.display();

// The click() function makes it possible for console.log() to output grid coordinates for wherever the screen is clicked. //

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

// Google Maps is appended to the correct div in index.html, using a JQuery selector. //

$("#mapDiv").append(googleMap);


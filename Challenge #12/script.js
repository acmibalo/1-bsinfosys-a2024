
	const dropdownButton=document.getElementById("dropdownButton");
	const dropdownContent=document.getElementById("dropdownContent");
	const menuArrow=document.getElementById("menuArrow");
	dropdownButton.addEventListener("click",function(event){
	dropdownContent.classList.toggle("show");
	menuArrow.textContent=dropdownContent.classList.contains("show")?"▲":"▼";
	event.stopPropagation();
});
	document.addEventListener("click",function(event){
	if(!dropdownButton.contains(event.target)&&!dropdownContent.contains(event.target)){
		dropdown-content.classList.remove("show");
		menuArrow.textContent="▼";
		}
});
	document.querySelectorAll(".myaccount").forEach((myaccount)=>{
	myaccount.addEventListener("click",function(event){
		const content=this.nextElementSibling;
		const arrow=this.querySelector(".myaccount-arrow");
		content.style.display=content.style.display==="flex"?"none":"flex";
		arrow.textContent=content.style.display==="flex"?"▲":"▼";
		event.stopPropagation();
	});
});
	document.getElementById("search-input").addEventListener("focus", function() {
      document.querySelector(".search-container").classList.add("active");
    });

    document.getElementById("search-input").addEventListener("blur", function() {
      if (!this.value) {
        document.querySelector(".search-container").classList.remove("active");
      }
    });
	const savedTheme = localStorage.getItem("theme");
		if (savedTheme === "dark") {
			document.body.classList.add("dark-mode");
		}
		const themeToggleButton = document.getElementById("theme-toggle");
		themeToggleButton.addEventListener("click", function() {
			document.body.classList.toggle("dark-mode");
			if (document.body.classList.contains("dark-mode")) {
				localStorage.setItem("theme", "dark");
				themeToggleButton.textContent = "🌞"; 
			} else {
				localStorage.setItem("theme", "light");
				themeToggleButton.textContent = "🌙"; 
			}
		});
	function toggleSubNav(id) {
		const subNav=document.getElementById(id);
		const isDisplayed=subNav.style.display==="block";
		document.querySelectorAll('.sub-nav').forEach(nav=>{
			nav.style.display="none"
	});
		subNav.style.display=isDisplayed ? "none":"block";
	}
	function toggleSidebar(id) {
    const subNav = document.getElementById(id);
    const contentDiv = document.getElementById("content");
    const isDisplayed = subNav.style.left === "0px"; 

    document.querySelectorAll('.sidebar').forEach(nav => {
        nav.style.left = "-20vw";
        nav.classList.remove('open');
    });

    if (!isDisplayed) {
        subNav.style.left = "0";
        subNav.classList.add('open');
        contentDiv.classList.add('push-right'); 
    } else {
        subNav.classList.remove('open');
        contentDiv.classList.remove('push-right');
    }
}

    function toggleAccordion(id) {
        const accordion = document.getElementById(id);
        accordion.style.display = (accordion.style.display === "block") ? "none" : "block";
    }
        function showChapterContent(chapter) {
    const contentDiv = document.getElementById("content");
    const body = document.body;  
    let chapterContent;
    
    if (contentDiv.style.display === "block") {
        contentDiv.style.display = "none";
        body.style.backgroundColor = "";  
        return;
    }
	const bubbles = document.querySelector('.bubbles');
bubbles.style.display = 'none';
    contentDiv.style.display = "block";
    body.style.backgroundColor = "white !important";  
    
    switch (chapter) {
    case 'chap1':
        chapterContent = "<h2>Days of Shame</h2>" +
            "<p>Life is full of struggles, but not when your are a kid. I was living in a big house, near a creek, and front yard full of blooming flowers. I had many toys, I had friends, an average kid with no single thought of what happened, what will happen, or even what is currently happening. My cousins once thought of me as 'walang pakealam sa mundo', just a kid who's breathing, was that true? All I could Think was to play and enjoy, it was what I consider as life and that's what makes it unforgettable.</p>" +
            "<p>Primary school to 5th Grade were all games and fun, all butterflies, toys, and friends, everytime I look at it, think of it, embarrassment is what I could describe it. I remembered the days, the olden days, where we do not have water faucets, and all we have was a well located almost 1 hectare away from our house, every morning since I wake up late, my uncle would fetch me water so I could take a bath, but what makes it embarrassing is that I always take a bath in front of our house, which my neighbours, including people who are passing by would see me almost naked, God! What an unbothered child!</p>" +
            "<p>However, the embarrassing moments did not stop there, as a lazy kid, I sometimes don't take a bath when I go to school, I was unhygienic and I know it, like a child abandoned in the streets. There is an amusing memory I could never forget, early morning that was supposed to be normal. I walked to school carrying my heavy backback, but just minutes later, it became a nightmare that would haunt me forever. It rained last night so the ground was wet and muddy, I was in fifth grade at the time, so our room was on the edge of the campus. I stopped at the 3rd grade rooms because the pathway was blocked, I saw a way but it was wet and muddy, so I just went along with it. My first step was fine, the second and third too, however, the fourth step was so slippery that I fell so hard on the ground. Everyone saw it and they all laughed. My body covered in mud, staining all my clothes, I went home crying and did not attend school that day. But, everything stopped when I was in 6th Grade, a sudden change happened, a kid who was full of joy turned unhappy. Adolescence struck so hard like it was lightning, toasting all joy left on my body to ashes. Though, I still played games, It was never the same, I became too shy, acne and pimples started to grow on my face, I don't even know what happened, I became insecure.</p>"+
			"<p>6th Grade was a nightmare, my teacher was a nightmare, I hated her, he hated me! I still remember those days, I was shamed by her. I lived in harmony, then, everything changed when that monster attacked. A supposed normal morning turned to an unforgettable memory of shame. It was early in the morning, it was cold, and the sun was still rising, I entered the school, and immediately went to our AOR since it's just a step away from the school gate. I put my bag in a cottage, from where the supposed 'Monster' is sitting, I did not noticed her, but she did. Minutes had past it's time to go back to our classroom, and everything began. As I was sitting on my chair she went in front, looking angry, directly staring at me, she then asked me to stand up, and told how rude I was, my mind was like 'wut!?', she was angry how I did not greeted her good morning, but how could I? I did not noticed her and it wasn't even a good morning, she then continued to scold me in front of my classmates, I was ashamed! I wanted to cry! I wanted the world to eat me 'cuz of the shame. After that, life was never the same, it never was, each week she would find ways to shame me, but luckily, I graduated.</p>";
        break;
        case 'chap2':
            chapterContent = "<h2>Rise of Jupiter/Prodigy</h2>"+
			"<p>High school is arguably the hardest transition a child could experience. Friends scattered across diferent sections and your are left out. Imagine a room of 50 plus students and you only personally knew one. I was like a man who got reincarnated in a different world, I was alone, anxious,  and wary. They were all smart, almost all of them, except me. That section was full of gifted students, they were smart, talented, it was a room of honor students, how did I even get there? I was stupid, and I clearly remembered none of our lessons when I was in elementary, I only played games, I only enjoy, I could not grasp the idea of studying, I was weak at addition, subtaction, and let alone mulitiplication, I cannot even divide! What did I do to even be part of that section? </p>"+
			"<p>Not even two weeks and I almost thought I would fail. Day one was full of self-introduction, even lasted to day two. 3 days had passed and teachers began to do their job, day-by-day I noticed how incredibly smart my classmates were, from english down to mathematics, but what about me? A week passed and there I was, dazed into confusion, like someone who just woke up from anesthesia. After hours of listening, my teacher told us to get ¼ sheet of paper, I was shocked, I only listened, I did not understand anything. That day, I was confused, I can't answer anything, so I resorted to cheating, I was so hopeless that day, and it was the first time I looked at someones paper, and it's even still week two of highschool. Question one confused me, question two confused me again, I wanted to cry, but my seatmate was like an angel, I saw his paper and I copied it. Karma is really a real thing, only the both of us gained zero scores. That day, I promised to study.</p>"+
			"<p>Ever since that day, I had good scores, higher enough that it made me an honor student, my mother was so proud that day, it was my first and ever award I received throughout my life, imagine a kid who only knew to play games now studies. I worked so hard to get to the top, and It went well, i did good, too good. From cheating and gaining zero score to achieving the high scores in every tests— Not all the time though. I became an honor student ever since, and it's the only source of my pride.</p>"+
			"<p>However, I was maybe to focus of my study. It's true that I did good but probably I missed at socializing. My classmates always describes me as an introvert person before, they said that I would only talk if they initiated. It made me laugh that everytime they describe me, it's always about how quiet I was, it was so obvious as I would only stay in my seat, minding my own business, just simply existing. But even though I was introvert, I still had friends, and it surprised me. I thought I was always alone, but maybe I was just dreaming. </p>";
            break;
        case 'chap3':
            chapterContent = "<h2>When World Turned Upside-Down</h2>"+
			"<p>Boom! Coughs! Viruses! And alcohols! Scattered across the globe. A once normal lives of the people turned upside-down. Deaths, quarantine, and self distances were the words I could describe when people thought of the pandemic, but mine was completely different. I remembered how COVID-19 was the talk of the world, a supposed two weeks of quarantine turned two years. A once normal life I had took a sudden turn, it is such a guilty pleasure when I say that I enjoyed the pandemic. The longest vacation every students wanted, it even took almost half a year for the school to resort to modular learning. Such a peculiar year, no people outside, no classes, and almost everything is online. </p>"+
			"<p>I really loved and hated how the quaratine changed me, everyone, and everything. The first stage of quarantine was so nostalgic. I remember how me and my cousins would place blanket unto the ground and lay there, gazing the vast starry night, almost every night, I enjoyed it, we certainly do. We were still young that time, we would play card games, went star gazing, converse into deep things and we would always talk about what we would become in the near furture. Not just that, it was also the year I was baptized, it felt heavenly because of how close I was on becoming a true Christian. It was funny also as how my two classmates attended the celebration, I was so busy entertaining the guest that time that I did not noticed they were waiting for me outside. such a beautiful time of our lifetime</p>"+
			"<p>Everything that time was online, from socializing to even school and working. Pandemic was a very long day of resting for an enhausted student. I remember how I destroyed and shifted my sleeping schedule, from waking up early in the morning to sleeping at day. My own cousins thought of me as a monster (aswang)— they were right of course but it still hurts. Every night I was awake, all night playing games and scrolling through social media, while asleep in day day. I remember how I would only make and finish my modules every sunday, just a day before passing it—procrastination at its finest. That time I received my first ever failing grade (74) and all hell broke loose. </p>"+
			"<p>I will forever cherish and thank Mobile legends, tiktok, facebook, youtube, all other social medias. They cured my lonely heart by making every second of that time spent. I would always appreciate how the pandemic impacted me, though there were deaths, sleeping, playing games, and going through every part of your phone is how I would describe that time.</p>";
            break;
        case 'chap4':
            chapterContent = "<h2>Jupiter was a Failed Star</h2>"+
			"<p>Life doesn't start when you are born, it only begins when you experience the hardship everyone would face. The pandemic lasted only two years, I was saddened, as another big transition would happen again. Graduating junior high was only the beginning, and senior high was my first struggle (though I am still a SHS student). Junior high was easy, but SHS is different. It was the first and ever time I experience almost crying due to school works. It was the starting point of my realization towards life. The child who once filled with ambition and determination, became lazy and exhausted every day. Imagine from waking up and arriving at school before at 6:00 am now I arrive at 7:00 am. </p>"+
			"<p>11th Grade was actually good, I met new people that sooner became my friends, I thought it would be tough for me but it wasn't. I still got that dawg in me. It was a huge transition but we still manage, I had good memories thoughout that year. I still remember how much I spent on our subject contemporary arts. It was costly but worth it, we painted in a canvas and we enjoyed it. I remember our first defense and research paper, I was so nervous that time that I went cold. I always hated my seatmates because of how noisy and annoying they were but I would still cherish how good of a friend they were all the time. I became too close to some of my classmates to the point that I would ask them to come with me just so I won't be alone when I solve my daily diarrhea, it was fun and such a nice experience. I have all photos kept in my phone as a remembrance of such a nice memory that I hope that will never be forgotten. </p>"+
			"<p>Currently, I am now in Grade-12, and I am not doing good. I thought I was smart, I thought it made me unique and different, it was the identity I possessed, but I was wrong. I was just an average student, I thought that doing good in school is somewhat different or peculiar. However, I realized that it's normal, it was what we were suppose to do, to study, and make everyone proud. In just a span of seven months I had faced many challenges, too many to count. Our research paper up till now is still not done, but it is not really the huge challenge. There are too many paper works I need to do, its stressing me out, I really hate it that I can't enjoy almost everyday. College is coming, and another transition is happening again, I hate it but can't do anything with. Life really sucks, it always have been.</p>";
            break;
		case 'chap6':
            chapterContent = "<h4>My Poor Girl, Jackilyn</h4>"+
			"<video class='jackilyn' controls>"+
			"<source src='images/jackilyn.mp4' type='video/mp4'>"+
			"</video>"+
			"<p>Not too long ago, I had the cutest dog—Named Jackilyn. She was my friend and is the only dog I loved in my life. I did not name her though, my father did. I loved her name, her black coat, and her barks too. I loved her that she was the only dog I fed everyday. But now, she is nothing but a distant memory. </p>"+
			"<p>Jackilyn was a kind girl, I raised her like my own daughter. She grew up and became the perfect pup every family wished to have. After her growth she got pregnant, which I was overjoyed because I knew she would become a perfect mom for her pup. Soon after she gave birth, everything went downhill. She became overprotective, to the point everything stresses her out, thus, she bit our neighbor. My dad, without my knowledge sold her out to some alcohol addicts. I thought it was a joke, a prank, because he certainly knew how I loved that dog, even he too. I already knew what would happen, and i cried. Jackilyn was slaughtered, and left to be eaten by those drunk bastards!</p>"+
			"<p>My poor girl, Jackilyn, Is grief the price we pay for love? Up until now I could not have a pet, though we have cats and dogs in our house, none could replace. I almost forgot about her, I could not remember how she look, and even bark, she could not even see her puppies grow. So sad how I lost her, I mourned her death, the first thing that ever broke my heart.</p>";
			break;	
		case 'chap8':
            chapterContent = "<h4>Wilfredo Abitona Estremos</h4>"+
			"<img src='images/wilfredo.jpg' alt='Wilfredo Estremos photo' style='width:30vw; height:50vh; margin-top:2vh; margin-left:35vw; margin-bottom:2vh;'>"+
			"<p>Wilfredo A. Estremos is an average but a loving Father. He was born on the 20th of July, 1961 in Magpet, Cotabato and is currently 62 years old. He was the youngest among his four other siblings (2 brothers and 2 sisters), given birth by their mother, Maura V. Abitona and their father named, Ramon M. Estremos. Wilfredo met his now wife—Marlyn M. Asotigue at his hometown years before they are finally official on the year 2005. A year after, his first-born son, Wilmar A. Estremos was born on the 21st of February, 2006 and it took seven years for his daughter, Imee A. Estremos to be born (March 22, 2013). Wilfredo was an in and out student when he was high school and college, cause by his families poverty, ultimately resulted to his immediate drop-out, thus, he could not finish his college endeavour.</p>"+
			"<p>Wilfredo lived an almost typical life, his mother was a first-grade teacher, having a salary that could provide his and his siblings needs. However, they still struggled, as both his parents combined salary could not keep up to their families increasing needs. He tried his best at his studies but poverty was such a pervasive  problem throughout his journey. He was an in-and-out student during his high school years and even when he was on college. During those out-of-school days he worked as a farm boy of their own small farm, taking care of their animals—pigs, horse, chicken, goats, and cows, he also helped in maintaining their bananas and coconut trees. Wilfredo did this for a good cause—to help his mother support his siblings education by selling the animals and fruits of their farm. During these days, he developed different vices, specifically being a drunkard and a smoker and this continued up to the current which his son started to hate. After his mother's retirement, everthing started to get worse, and due to this emerging difficulties he discontinued his college journey even his sister intervened. Years passed and he met his wife—Marlyn and their love story began to spark, soon after, they built their own family. Nowadays, Wilfredo lived a stable life together with his now family, however, poverty would still hunt him up until now. </p>"+
			"<p>Throughout his life, Wilfredo experienced and learned many things. As he lived in poverty, he tried his best to keep his children away from it, though sometimes poverty is still out of his control. He worked hard so his children could never experience the felling of a drop-out student, and tried his best to keep the family close together so they would never experience things he suffered before.</p>";
			break;	
		case 'chap10':
            chapterContent = "<h4>Wilmar Asotigue Estremos</h4>"+
			"<h6>─An Autobiography</h6>"+
            "<img class='chap10' src='images/aboutme1.jpg'>"+
			"<p>My name is Wilmar A. Estremos, eighteen (18) old, and I was born on the 21<sup>st</sup> of February, 2006 at our own house, Purok Malipayon, Poblacion, Magpet, Cotabato. I am now currently a Grade-12 student at Magpet National High School, taking the strand─Humanities and Social Sciences, soon to be a nurse or IT after college. My parents are not yet married, they are Marlyn M. Asotigue and Wilfredo A. Estremos, both bearing two children, Me (the eldest) and my little sister, Imee A. Estremos, eleven (11) years old. My parents have low income since my Father is just a carpenter and my mother is a house wife but now it worsened, as my dad came to his senior year, he stopped working due to several reasons and he became very alcoholic, and my sister stopped attending her school, now my mother and I are working hard to survive this trying time.</p>"+
			"<p>My childhood is nothing but ordinary, just an average life kids get to experience─simply waking up, taking a bath, then go to school, the rest are all play and games, and leisure time too. Growing up I had never faced huge problems (as I remember), like those days where you would just take a break, reflect, and cry the night out. It was typical, however, though it's boring, I did many things that were enjoyable, especially when the pandemic happened around early 2020. I started to like playing mobile games to the point it became an addiction, the pandemic was really a mess. Playing games is what helped me survive the lonely pandemic. Even though I received my first ever failing grade, I can still say I very much enjoyed it, thans to Mobile Legends which will forever hold a special place in my heart, it was so special that I spent almost 15K (thousand), especially in late 2021 and year 2022. Even though my parents thought it was a problem, it never really affected my life negatively, only my pocket and sleep schedule. Since junior high school I became a consistent honor student, it was shocking since when I was in elementary I never thought of studying─not even once. So, the first ever failing grade maybe shocking, it was never really disappointingm probably much deserving. Though it still happened, I got on my feet, and continued to pursue studying, being a consistent honor student again while also receving other awards.</p>"+
			"<p>For a typical kid, problems are inevitable. Though, it never really affected me that much because of my support system. If boredom emerges, I have mobile legends, anime, all marvel movies/series and whole lot of fiction. If I faced financial challenges, I have my own savings. If I feel depressed, I have my family and friends. This will be funny, but what I learned throughout my life is to just go with the flow─things might get challenging but it will only shape our resilience, and give us lessons that will help us move forward. It may be hard, but we always have someone at our back, we can do everything alone, but no man is an island, we still need support.</p>";
			break;
		case 'chap12':
            chapterContent = "<h4>District of Happiness</h4>"+
			"<p>Quiet and peaceful is what I can describe about the place I grew up in. With its lush greens and trees stood tall, I will always remember its past beauty. </p>"+
			"<p>Even with its peace, our land was much lively than it is now. Children playing outside, even when it rains, 'marites' gathers despite the neighbors were far apart—too lively, though it was quiet. Tall trees were in hundreds, colorful flowers sprouts almost everywhere, fresher air, cool breeze, different types of animals were raised. We really do appreciate our past more than what and where we are now. </p>"+
			"<p>When I was young, I remembered how no vehicle would dare to enter our Purok because the road is too eerie and its rocky too. There were so many stories told, from 'Kapre', 'White Lady', and 'Chanaks' too, but of course, none were really true. I will never forget how our fiestas would always fill our Purok with happiness, everyone have the chance to eat, have fun, and show their talents. I had just too many memories that no SD card could ever contain it.</p>"+
			"<p>As time pass by, change happens—our Purok's name even changed too. It is ironic how it was named Purok Malipayon, when its people were not, everything just changed, it simply happened. From having fifty families living in our Purok, it doubled or even tripled. It became too noisy, polluted, and hot, just like every place in Magpet. Roads were already cemented, trees have been cut down, and only dogs were left. </p>"+
			"<p>Everytime I walk home, nostalgia would always fill my mind and heart. Though everything had changed, my memories about our Purok's past will always remain. So it is really true how nostalgia keeps us away from loving the present. Sentiments stays longer than appreciation.</p>";
			break;
		case 'chap14':
            chapterContent = "<h2>Dear Ma,</h2>"+
			"<p>Things today have been difficult, much harder than we have faced before. I know everything have been stressing you out these days, even little things. Imee have been acting out since last year and I know how worried you are for her future, but just let her be, let time do the work. Soon, she will realize her old doings and change for the better. She may be a brat right now but one day, you will wake up and see a brand new person walking in our house. So, for the mean time let's just wait for her to shed that skin on her own, the same thing I did before. </p>"+
			"<p>We may have faced countless of problem these days, but you what? WE can do this, not alone but together. We have surpassed those problems before and we shall not back down now. I am writing you this letter not to express my concern, but love instead. We may never been a picture-perfect family, I may never have been your perfect son, but still, you will be always and forever my mom. I can never tell you 'I love you' but my action enough will express it.</p>"+
			"<p>Your beloved son,</p>"+
			"<h5>Wilmar</h5>";
			break;
		case 'chap18':
            chapterContent = "<h4>From Poverty to Possibility: A Study on Resilience among SHS 4Ps Beneficiary Students of Magpet National High School</h4>"+
			"<h4>CHAPTER I</h4>"+
			"<h4>THE PROBLEM AND ITS SCOPE</h4>"+
			"<h2>Rationale</h2>"+
			"<p>Poverty has been a pervasive and complex issue that has plagued the Philippines for many decades. The Philippine Statistics Authority has reported that approximately 16.7 million Filipinos live below the poverty line, with many of them struggling to make ends meet on a daily basis. Consequently, education becomes an unaffordable luxury for many families, especially those living in the most impoverished communities. The inability to send their children to school forces them to work instead, perpetuating the cycle of poverty for generations.</p>"+
			"<p>In recent years, the Philippine government has launched several initiatives aimed at addressing the problem of poverty and its impact on education. One such program is the Pantawid Pamilyang Pilipino Program or 4Ps (Niyang, 2023). The Pantawid Pamilyang Pilipino Program (4Ps) is a conditional cash transfer program of the Philippine government under the Department of Social Welfare and Development <abbr title='Philippine government under the Department of Social Welfare and Development'>(DSWD)</abbr>. The program aims to break the cycle of poverty by keeping children aged 0-18 healthy and in school, so they can have a better future (Admin, 2019). According to Gou (2022), the program provides financial assistance to the impoverished to improve the health, nutrition, and education of children aged 0-18. The program has one of the most comprehensive poverty targeting databases in the world today covering 75% of the country’s population (Doria, 2021).</p>"+
			"<p>The financial support provided by the Pantawid Pamilyang Pilipino Program <abbr title='Pantawid Pamilyang Pilipino Program'>(4Ps)</abbr> have been shown to have a positive effect on the academic performance of student-beneficiaries in the Philippines (Flores et al., 2019). By providing financial assistance, the 4Ps program helps families to afford the costs of sending their children to school, such as transportation, school supplies, and uniforms. However, Tiu et al. (2022) said that the cash grant provided by 4Ps for health, nutrition, and especially in education is insufficient to cover the actual expenses of the beneficiaries. As 4Ps beneficiaries receive a minimum of P1,650 and a maximum of P3,450 per month, depending on the number of children they have. Parents may get P300 for every child in grade school, P500 for every child in junior high, and P700 per child in senior high (Subingsubing, 2022). </p>"+
			"<p>Here in Magpet National High School, there are many students who belong to the program, especially in Senior High. This study will be conducted to investigate the resilience of the senior high school <abbr title='Pantawid Pamilyang Pilipino Program'>4Ps</abbr> beneficiary students in Magpet National High School. The purpose of this study is to discover and to know the lived experiences of the senior high school 4Ps Beneficiary students in Magpet National High School and to know how helpful the financial support is given by the 4ps program to students in terms of meeting their academic expenses.</p>"+
			"<h2>Theoritical Background</h2>"+
			"<p>The researchers aim to extend the gathered Information through the accumulated theories proposed by these theorists and philosophers. The researchers will use theories to widen data and Information, Investigate and prove the said theories to make the study firm and clear.</p>"+
			"<h2>Human Capital Theory</h2>"+
			"<p><cite>Human Capital theory</cite> by Becker (1964) in his book 'Human Capital' is a concept which posits that investment in an individual’s education and training is similar to business investments in equipment. Becker defined human capital as 'activities that influence future monetary and psychic income by increasing resources in people'. He added that Education and training are the most important investments in human capital. Human Capital presents both public and private investment decisions for governments and its people. As a public investment, the fundamental argument is that investing in education leads to economic growth through increased productivity, social stability, and healthier lifestyles. On the other hand, as a private investment choice, investing in education leads to increased lifetime earnings for those with more years of schooling; access to better paying jobs; reduced time spent in the unemployment market; and speedier transitions to enhanced career prospects (Wahrenburg and Weldi, 2007).</p>"+
			"<h2>Resilience Theory</h2>"+
			"<p>There are several theorists that surround the Resilience theory, one is Norman Garmezy. He defined resilience as <q>Not necessarily impervious to stress. Rather, resilience is designed to reflect the capacity for recovery and maintained adaptive behavior that may follow initial retreat or incapacity upon initiating a stressful event</q> (1991a). Another theorist, Ann Masten, student of Norman Garmezy, defines resilience as <q>The capacity of a dynamic system to withstand or recover from significant changes that threaten its stability, viability, or development</q> (Masten, 2011). In other words, Resilience theory refers to the ideas surrounding how people are affected by and adapt to challenging things like adversity, change, loss, and risk. Resilience theory has been studied across different fields, including psychiatry, human development, and change management.</p>"+
			"<h2>Socio-cultural Theory</h2>"+
			"<p>Vygotsky's <cite>Sociocultural Theory </cite> (1934, 1978) , developed during the early to mid-20th century revolutionized the field of developmental psychology, where it emphasizes the role of social interactions, cultural context, and the influence of the community on cognitive development. At its core, Vygotsky’s theory posits that learning is intricately connected to social experiences and occur within a cultural framework. He introduced the concept of the Zone of Proximal Development (ZPD), highlighting the gap between a person’s current level of abilibity and their potential level with guidance from a more knowledgeable other. This concept underscores the importance of challenging task that fall within this zone, promoting learning and skill development through collaboration and guidance.</p>"+
		    "<p>The theories stated above have its own different claims and it is related to this study for the reason that all gathered data and information are needed in this research to make the study firm and clear. The Human Capital Theory of Becker (1964) emphasizes the investment in education and training as a means to enhance individual’s skill and abilities, aligning with the investigation of the lived experiences and academic expenses among these students. The Resilience Theory contributes by exploring how these students’ overcome adversities and challenges, shedding light on their capacity to adapt positively to difficult circumstances, potentially illuminating how the financial support from the 4Ps program aids their academic endeavors despite facing various obstacles. Meanwhile, Vygotsky’s Socio-cultural Theory underscores the significance of social interactions, cultural influences, and external support mechanisms such as financial aid in shaping the learning experiences and cognitive development of students, providing a lens to understand how the social environment and cultural context impact their educational journey as 4Ps beneficiaries.</p>"+
			"<h2>Statement of the Problem</h2>"+
			"<p>This study investigates the resilience of the 4ps beneficiaries of Magpet National High School, of the school year 2023-2024 specifically, this study answers the following questions:<br>1.	What are the lived experiences of the 4ps beneficiary students of Magpet National High School? <br>2.	How helpful is the financial support of the 4ps program to students in terms of Academic expenses?</p>"+
			"<h2>Significance of the Study</h2>"+
			"<p style='text-indent:0;'>The following factors will benefit from this study:<br> <b>Senior High School Students.</b> This study can raise awareness among the said students about the challenges faced by 4Ps beneficiaries and their resilience in overcoming those challenges. The findings can serve as inspiration for the students, showing them that despite facing difficult circumstances, they can still succeed academically and in life.<br> <b>Parents.</b> The study can help parents of the students who are the 4Ps beneficiaries understand the specific challenges their children may be facing and the strategies they employ to overcome those challenges. The findings enable parents to provide better support and guidance to their children, both academically and emotionally.<br> <b>Teachers.</b> The study can inform teachers about the unique challenges faced by the 4Ps beneficiary students, allowing them to tailor their teaching approaches and strategies to meet the specific needs of these students. <br> <b>Future Researchers.</b> This study can serve as a foundation for future researchers who wish to explore the resilience and lived experiences of 4Ps beneficiary students in other contexts or with different age groups.</p>"+
			"<h2>Scope and Delimitation</h2>"+
			"<p>The coverage of this study is to investigate the resilience of senior high school 4Ps beneficiary students in Magpet National High School for the school year 2023-2024. This study will focus on the lived experiences of the SHS 4Ps beneficiaries in Magpet National High School and how helpful is the financial support given by the program to the students in terms of meeting their academic expenses. The researchers have limitations to the information, ideas, and experiences shared by the informants. Fifteen (15) students were chosen from all academic tracks, and all were used as respondents of the study. The researchers only selected Grade 11 and Grade 12 students to be informants of the study. Moreover, the informants’ answers to the interview are gathered together by the researcher to satisfy the questions asked in this study.</p>"+
			"<h2>Definition of Terms</h2>"+
			"<p style='text-indent:0;'><b>Academic Expenses.</b> Refers to the educational expenses of students, includes requirements such as school fees (tuition fees, class/sinking funds, etc.), projects, allowance, and assignments.<br><b>Beneficiary.</b> In this study, it refers to a person who receives the ‘benefits’ given by the 4Ps program, it includes money and other things.<br><b>Conditional Cash Transfer Program.</b> Refers to welfare programs that aims to reduce poverty in a country by giving cash grants to its beneficiaries that follows certain conditions; The 4Ps program is one of the examples of this.<br><b>Education.</b> A Child’s rights to obtain in life; Refers to an aspect that can be obtained in school, which can used as way to overcome poverty.<br><b>Financial Support.</b> The money or cash that is given to the beneficiaries of the 4Ps program.<br><b>Poverty.</b> A pervasive problem to Filipinos that hinders their everyday lives; Dealt with low monthly income families in the Philippines.<br><b>Resilience.</b> Refers to one’s ability to adapt in adversities, like poverty.<br><b>Pantawid Pamilyang Pilipino Program (4Ps).</b> A program implemented by the Philippine government to combat poverty by giving cash grants to its beneficiaries who follows conditions.</p>";
			break;
			case 'chap19':
            chapterContent = "<h4>CHAPTER II</h4>"+
			"<h4>REVIEW OF RELATED LITERATURE AND STUDIES</h4>"+
			"<p>This chapter presents the related literature and studies from both local and foreign sources. This gave the researchers a broader perspective which aid the researchers in understanding the study of the Resilience among SHS <abbr title='Pantawid Pamilyang Pilipino Program'>4Ps</abbr> Beneficiary Students. As this chapter includes the generalization or conclusions of ideas to help in familiarizing information that are relevant and similar to the study.</p>"+
			"<h2>Review of Related Literature</h2>"+
			"<h2>The 4Ps Beneficiary Experience</h2>"+
			"<p>In 2013, the Ejera family became recipients of the Pantawid Pamilyang Pilipino Program (4Ps) of the Department of Social and Development (DSWD), Inso (2019) stated. This government program, according to them, was an answer to their prayers. they were able to pay for their school expenses. He also added that, they were able to taste delicious food that they have never tasted before.</p>"+
			"<p>Newman (2021) added, as she interviewed Santiago, an 18 yrs. Old from Negros Ocidental, she said that her family is one of the partner-beneficiaries of 4Ps in Basay and she said it helped sustain their needs. She quoted that <q>Nothing is impossible if you work hard for your dreams. I would always be a proud 4Ps child-beneficiary. The program had greatly helped in sustaining my education. I wanted to be an inspiration to other children who have the same dreams as mine.</q></p>"+
			"<p>Moreover, in the article of Agoot (2023), it was emphasized that, with the help of the Department of Social Welfare and Development’s Pantawid Pamilyang Pilipino Program (4Ps), Guiral said his family was able to have a better economic situation. Based on their family’s experience, he said the cash grant opened the door for them to study, which they now use not just to help each other but in sharing their story to inspire other 4Ps beneficiaries.</p>"+
			"<p>It was learned that their family’s status (Rosses and Dime) as 4Ps beneficiaries played a crucial role in their selection for these scholarships. As part of the whole-of-government support, 4Ps beneficiaries like Rosses and Dime, are given priority in government programs and services, Layola (2023) stated.</p>"+
			"<p>However, despite the positive remarks and experiences of others, Manahan (2022) reported that hundreds of 4Ps beneficiaries are in trouble because they cannot withdraw their cash grants from the program, which according to the Department of Social Welfare and Development is due to a technical glitch. This includes Baikan Tasil, who has been going back and forth to the ATM several times to withdraw. He said his need is strong especially since his children’s class is face-to-face. The cash grant was supposed to come in on October 7 but until now, he has not been able to withdraw it.</p>"+
			"<p>Additionally, some beneficiaries of the Pantawid Pamilyang Pilipino Program (4Ps), according to Mano (2023), hoped that they will also receive aid when the new round of the Targeted Cash Transfer (TCT) program of the Department of Social Welfare and Development (DSWD) is implemented. According to Elizabeth Adonis, a 70-year-old resident of Tondo in Manila, in fact, the P3,700 she receives every 2 months is insufficient due to the high price of goods. He is said to be saving what he gets from the 4Ps for his grandson’s allowance and to supplement their food.</p>"+
			"<p>Despite those challenges, Lim & Gom-os (2023) stated that, some beneficiaries of the Pantawid Pamilyang Pilipino Program (4Ps) in Lapu-Lapu City are just grateful for the assistance the government has been providing them, even if the prices of basic commodities have risen while the amount of the assistance has not.</p>"+
			"<h2>Support to Academic Expenses</h2>"+
			"<p>In a post made by Castilla (2020), as she explained her story as a 4Ps beneficiary, she stated that the 4Ps program aims to educate Filipino children like him, by giving quarterly allowances as he goes to his daily classes. His parents benefit from the program since he, as a student, learned a lot in school as well as given dietary allowances for food as we go to school.</p>"+
			"<p>Dominggo (2019) added, in her Facebook post, she narrated that she was in high school when her family qualified for the 4Ps. In third year college, she became a recipient of the Expanded Students’ Grant-In-Aid Program For Alleviation (ESGP-PA), a scholarship program for 4Ps beneficiaries that includes free tuition fees, book allowance, and other needs for college, which really helped her in her education.</p>"+
			"<p>Ludivida quoted <q>Life was really hard, especially since both of my children were attending school at the same time. It’s a good thing that the 4Ps provided cash assistance, which was what I gave my children for their allowances</q>, Ludivina said in the article written by Pedalino (2023).</p>"+
			"<p>Jerahmie’s change in her family, stated by the article of Palawan News (2023), she described, has been significant since they joined the program. They are able to have the school supplies they need, and her siblings rarely get sick because they are provided with vitamins by the program. In 2018 and 2019, Jerehmie received educational assistance from the program, which helped her achieve her dream of becoming a civil engineer.</p>"+
			"<p>Additionally, the article made by Libarios (2023), narrated that, the experience of Jenecile Parambita, as a former a 4Ps monitored child was invaluable, she said that, she owes her education to the invaluable support provided by her parents through the 4Ps program implemented by the DSWD. She said that the 4Ps educational assistance proved to be a turning point in her life in two ways: first, it helped her graduate from her school, and second, it inspired her to finished high school with flying colors. She also grateful that even after the program ended after her college life, 4Ps children were still prioritized in the listing of the Tertiary Education Subsidy (TES) scholarship by CHED, which was used to pay school expenses.</p>"+
			"<h2>Review of Related Studies</h2>"+
			"<h2>The 4Ps Student-beneficiaries Experience</h2>"+
			"<p>The study of Talimio & Salagubang (2019) highlighted that the beneficiaries residing in Barangay 211, Zone 19, Lico Street, Tondo, Manila is very satisfied with the benefits that they are receiving. Because according to the interviewees, it has a very positive impact on their lives and that the program is really effective in helping poor households especially in the education of their children. The head beneficiaries or the grantees have increased their sense of empowerment through the use of the subsidy provided to them by the program.</p>"+
			"<p>In addition, the findings in the study conducted by Sasaki, Diaz, & Brazal (2019) revealed that, this is consistent with the findings of Flores, et al. (2019) wherein they found that the educational cash grant was used to sustain the students’ school needs and other expenses as well as encourage these students to attend school and participate in the class activities.” The 4P’s, pupils are able to attend classes and they are motivated to go to school every day. The study also reveal that their parents/guardian are able to pay their school contributions and their parents/guardian are able to provide their school requirements (projects, school supplies, allowance, etc.) Findings also revealed that 4P’s beneficiaries are attending classes regularly.</p>"+
			"<p>This contrasted the study of Luz (2020), where it stated that despite the positive remarks of the participants about the program, their responses eventually led to several factors why despite the financial support given, they quit school and decided not to continue. It may sound unusual why despite the support extended by the government, still students cannot sustain their schooling, when the financial burden has been lifted.</p>"+
			"<p>However, Luz (2020) also stated that, the participants claimed that the program was a big help to them in their stay in school. <q>I was so thankful I was chosen that time as a grantee of the financial assistance, more that my parents really can’t send me to school</q> P1 said. <q>Yes, it was really helpful</q>, P2 added. Responses of the participants highlighted that the program was beneficial to students. <q>We receive monthly stipend, although sometimes it does not arrive on time, but it was really a big help</q> P3 said. <q>I use the assistance for my school needs, but most of the time, I give it to my parents, and they spend it for some of our basic needs, it really helped me a lot as a student and my family as well.</q></p>"+
			"<p>The study of Mahinay et al. (2022) revealed that, The 4Ps beneficiaries have felt the effect of government support into their lives as they have undergone different challenges and difficulties such as financial instability and inadequacy of funds. Also, struggles were also noted during the application and despite these challenges, the 4Ps as a government initiative has truly been helpful to those beneficiaries who are struggling with their finances in school. It has saved the beneficiaries in their most trying times. It further helped them mitigate their dire situation and somehow mitigate their need for financial support. They were also able to survive their daily needs because of this program.</p>"+
			"<p>In addition, the study revealed that participants remained grateful to become one of the beneficiaries of 4Ps. They acknowledged the advantages they have gained from the program and the benefits they experienced from it. They have learned further that valuing education is one important aspect that an individual should not forego. No matter how hard the situation is, one must not give up going to school. Lastly, participants recognized that success comes to those who work hard for it. One great manifestation of this is their very own life experiences. Despite being in the middle of many adversaries when they were still studying, they were able to overcome all these and completed their college education”, Mahinay et al. (2022) added.</p>"+
			"<p>According to Mahinay et al. (2022), The 4Ps beneficiaries were included because of financial incapacity and government grants. This means that student who suffers low income or poverty will be given grants which is the 4Ps. Further it was found out that students are thankful amidst the challenges they encountered from securing requirements up to living with it.</p>"+
			"<p>Before the beneficiary joined the 4ps, according to Mahinay et al. (2022), they were struggling financially and were unable to meet their involvement in the school related projects activities and contribution.it is apparent that over the year of living in poverty, both the families of the students themselves experience financial hardship.</p>"+
			"<p>Mahinay et al. (2022) concluded saying, Despite the challenges, the 4Ps as a government initiative has truly been helpful to those beneficiaries who are struggling with their finances in school. It has saved the beneficiaries in their most trying times. It further helped them mitigate their dire situation and somehow mitigate their need for financial support. They were also able to survive their daily needs because of this program. Moreover, these challenges taught them to use their finances wisely, to focus on the needs rather than the wants. They have also learned not to rely solely on the government subsidy but continue to hustle on their own. More importantly, participants have decided to turn the difficulties they encountered into motivation to persevere and work harder to complete their studies.</p>"+
			"<p>However, Mahinay’s study contradicted Escamillas’s (2019) study, where it is stated that one of the issues beneficiaries’ faces is that there are times that benefits and delayed the disadvantages of this program are the unfair treatment on those people who are not really qualified to become beneficiary of 4Ps student used their goal and ambition to be more determined in their studies.</p>"+
			"<p> Dulliyao (2019) added the 4Ps beneficiaries had trouble getting to the bank due to the barangay distance where they had their financial grants withdrawn. Some recognized limitations, such as the need to use their ATMs as collateral, and not all beneficiaries are aware of the program’s requirements and concept.</p>"+
			"<p>In the study of Flores, Espinoza, Enrico, & Casimiro (2019) they stated that majority of the student-beneficiaries belong to big, disadvantaged families. Some do not even have sufficient resources to sustain their basic needs. There were families that cannot afford to send their children to school. However, most of the respondents, in spite their enrolment to the program believes on the insufficiency of the grant to support their need.</p>"+
			"<p>Pineda & Fabella (2019) study also supported these statements, where it is stated that three of the co-researchers experienced mental distress that affected their confidence. In fact, a stigma had been developed to the point that they attempted denying being a member of 4Ps as experienced by the two co-researchers.</p>"+
			"<p>Additionally, most of the beneficiaries are very thankful to 4Ps because of the cash grant but their request is to increase the subsidy because of the recently approved TRAIN LAW, thus resulting to higher prices of goods and commodities in which the beneficiaries’ subsidy is not enough. They wish to increase the amount of subsidy that they are receiving, and they also request that the pay-out should not be late and delayed because according to their experiences, the payout is always delayed and it does not have an exact date for the beneficiaries to withdraw, according to the study of Talimio & Salagubang (2019).</p>"+
			"<p>Moreover, in the study of Villaflor et al. (2022) they concluded saying, “This indicates that the cash transfer in 4Ps is being utilized for the education of the student-beneficiaries and therefore attains the desired outcome of increasing the attendance and graduates in school.</p>"+
			"<h2>Support to Academic Expenses</h2>"+
			"<p>The Pantawid Pamilyang Pilipino Program according to the study conducted by Escamillas (2019), is a good and helpful program, especially in education. It helped the students to have allowances that they will use in buying supplies and paying other expenses in the school. It is really significant in the education of Senior High School students. This program provides the primary needs of students in school.</p>"+
			"<p>It is significant in the education of senior high School students. It is evident through the five beneficiaries who were the participants of this study. This program provides the needs of student in school. The participants of this study program provide primary needs of student in school, Escamillas (2019) added.</p>"+
			"<p>The study of Flores, Espinoza, Enrico, & Casimiro (2019) said that it is noteworthy that the educational cash grant is still being used to sustain the students’ school needs and other expenses. Another positive impact of the program is that it lessened the family-beneficiaries’ financial worries thereby helping students focus more on their schooling. Some of the students who became beneficiaries of the 4Ps have improved their academic performance with average grades higher than 85% to 90%. Also, the majority of the beneficiaries feel more excited to attend school and participate in the class activities.</p>"+
			"<p>In the study of Salagubang & Talamio (2019) said that the advantages of 4Ps are as follows: (1) the subsidy really helps poor households meet their basic and immediate needs, (2) it provides financial support for their families, (3) the subsidy enables the school children to be able to supply their academic needs such as materials, supplies, and school snacks.</p>"+
			"<p>Additionally, in the study of Sy et al (2019) added that, majority of the senior high school students agree that 4Ps motivates themselves in going to school, pushes them to perform well in the academic activities that would lead them into the top of their class, helps them to submit all of the school requirements, provides financial assistance to buy their needs.</p>"+
			"<p>According to Flores et al. (2019), by providing financial assistance, the 4Ps program helps families to afford the costs of sending their children to school, such as transportation, school supplies, and uniforms.</p>"+
			"<p>Luz (2020) supported Flores et al. study, where it is stated that the participants responded mostly positive things about the program. The financial assistance was able to help them with their daily needs in school, pay their school contributions, for their daily fare and school projects. Throughout the interview, it was noted that participants do have positive views of the effects of 4Ps to their education and that they see it helpful.</p>"+
			"<p>The Pantawid Pamilyang Pilipino Program (4Ps) according to Mahinay et al. (20220 is a government program that provided cash assistance for poor families to eradicate poverty. This program has made a great contribution to those beneficiaries. It helps them pay their tuition and monthly allowance and supports their family’s basic needs.</p>"+
			"<p>Moreover, according to one of the research respondents, the 4Ps has really been helpful, he stated that 4Ps helped him a lot in his study that is why he is very grateful with 4Ps. The statement implies that the 4Ps support them in their studies when their family’s needs are not met entirely because of an insufficient budget. Being part of an average family is difficult, and as one of the 4Ps beneficiaries, I am experienced with struggle, my parents go through to pay my school expenses, Mahinay et al. (2022) added.</p>";
			break;
			case 'chap20':
            chapterContent = "<h4>CHAPTER III</h4>"+
			"<h4>RESEARCH METHODOLOGY</h4>"+
			"<p>This section contains the methods used in the conduction of the study. It presents the research design, research locale, informants of the study, instruments of the study, data gathering procedure, and data analysis procedure.</p>"+
			"<h2>Research Design</h2>"+
			"<p>In collecting data and information, the researchers used one method, which is the phenomenological approach. Phenomenological approach refers to qualitative research that focuses on the commonality of a lived experience within a particular group. The fundamental goal of the approach is to arrive at a description of the nature of a particular phenomenon (Creswell, 2013). Through this process, the researchers may conduct the universal meaning of the event, situation or experience and arrive at a more profound understanding of the phenomenon.</p>"+
			"<h2>Research Locale</h2>"+
			"<p>This research was conducted on the school premise of Magpet National High School, a Department of Education (DepEd) managed partial urban secondary public school that resides in Poblacion, Magpet. Specifically, this study was conducted on the senior high school buildings of Magpet National High School, this said establishments comprises the <abbr title='Humanities and Social Science'>HUMSS</abbr>,  <abbr title='Science, Technology, Engineering, and Mathematics'>STEM</abbr>, <abbr title='Accounting, Business, and Management'>ABM</abbr> stand, and <abbr title='Technical-Vocational-Livelihood'>TVL</abbr> track. </p>"+
			"<h2>Informants of the Study</h2>"+
			"<p>Ten (10) informants were gathered purposely between Senior High School students of Magpet National High School− Public Campus. With reference to school records, the researchers ensured that the Informants are qualified to the following conditions: 1) that the gathered informants are senior high school students. 2) That they are from Magpet National High School. 3) That they are a 4Ps beneficiary.</p>"+
			"<p>The study pursued an interview type. In which the researchers used purposive sampling. In which the researchers selected informants that are fit for the study. For this, the researchers used this sampling in the study in order to prove or give support about the topic in a systematic fashion to enable to answer the research question.</p>"+
			"<p>The researchers then evaluate their hypothesis by the basis of the collected data. The purposive sampling was performed by the researchers through the process of individual interview. In each individual interview, one informant was purposely selected in the specified school. For instance, the selected informants were asked by the researcher’s relevant question.</p>"+
			"<h2>Instruments of the Study</h2>"+
			"<p>The researchers gathered their data through the use of student`s self – made interview guide questions, the question was verbally asked by the researchers in a semi−structured interview guide question. The researchers prepared a set of questions and that was answered by the informants, the questions were derived from the statement of the problem of the study.</p>"+
			"<h2>Data Gathering Procedure</h2>"+
			"<p>In gathering the needed data, the researchers first acquired the research instrument, letter to the informants, interview questions, and voice recorder. After they acquired this instrument, they are prepared to gather the needed data. To find the informants, the researchers looked for a classroom randomly, where the researchers cannot interrupt or disturb classes. After finding one, they asked the class mayor/teacher or anyone who had an idea of who among their classmates are 4ps beneficiary.</p>"+
			"<p>The researchers requested him/her to go outside the classroom for a short conversation, and then the researchers handed out the letter to the participant for him/her to read. After the informant cooperated and stated his/her condition, the researchers then asked him/her where he/she felt comfortable or uncomfortable during the interview, and then the interview commenced there. During the interview, the interviewer asked questions from the interviewer questionnaire. The interviewer avoided agreeing or disagreeing to the answer of the informant, the interviewer allowed the informants to answer until he/she is finished before the interviewer asked the next question.</p>"+
			"<p> The interviewer also refrained from smiling or laughing to avoid distracting or insult to the respondents, and the interviewer maintained a serious but not a stern face. After the interview, the researchers thanked the informants and ask him/her to write his/her basic information in a paper prepared by the researchers.</p>"+
			"<h2>Data Analysis Procedure</h2>"+
			"<p>For this research, the researcher used Thematic Analysis for analyzing the data given or answered by the informants. The researcher first transcribes the significant statements. Second, formulate the meanings of each significant statement selected and third, they extract the themes out of the formulated meanings.</p>"+
			"<p>The researchers then assessed the answers from the questions in the interview questionnaires given by the informants. The answers in each question have relevant pattern, and this pattern is called a theme. The themes were given sub-theme which, where the statement given by the informants in that question shown in chapter 4. It is the researchers ‘right to draw conclusions and recommendations for the issue.</p>";
			break;
			case 'chap21':
            chapterContent = "<h4>CHAPTER IV</h4>"+
			"<h4>PRESENTATION, ANALYSIS, AND INTERPRETATION OF DATA</h4>"+
			"<p>This chapter presents the results obtained from the informants, which provides an analysis of the major and minor themes of the study.</p>"+
			"<h2>Live experiences of senior high school 4Ps beneficiary students of Magpet National High School</h2>"+
			"<p style='text-indent:0;'><b>I. Negative Experience<br>A.	Financial Challenges<br>II. Positive Experience<br>A.	Financially Stable<br>B.	Enjoying Quality Life</b></p>"+
			"<h2>Financial support given by the 4ps program to students in terms of academic expenses?</h2>"+
			"<p style='text-indent:0;'><b>III.  Educational Assistance<br>A.	Aid in School Supplies<br>B.	Aid in School Requirements<br>C.	Aid in School Fees<br>IV.  Financial Aid<br>A.	Fulfills Basic Needs<br>B.	Lessens Financial Burdens<br>C.	Huge Help</b></p>"+
			"<h2>A.	Teamwork</h2>"+
			"<p>The researcher was able to extract a total of four (4) themes from the data obtained. The themes for the lived experiences of senior high school 4Ps beneficiary students: (1) Negative Experience, (2) Positive Experience, for the financial support given by the 4ps program to students in terms of academic expenses: (3) Educational Assistance, and (4) Financial Aid. </p>"+
			"<h2>Presentation of themes</h2>"+
			"<h2>I.  Negative Experience</h2>"+
			"<p>Negative experience in life, according to Vohs (2019) refers to unpleasant, depressing, or harmful events or situations that individuals encounter. These experiences can range from everyday challenges to significant adversities.</p>"+
			"<h2>A.	Financial Challenges</h2>"+
			"<p>The term financial challenges or difficulties refers to the difficulties or challenging financial situation a person might experience. It can originate from variety of sources, behaviors, and life circumstances (Mahr, 2022). Two of the informants said:</p>"+
			"<p style='text-align:center;'><i><q>“Kana siguro sa mga extracurricular nga activities bitaw nga nanginahanglan amotan so usahay wala ka ayo ko extra nga baon para pang kuan ana baya og ang school fees ma problema ko usahay”. (Lines 19-21 of Informant #1)</i></p>"+
			"<p>As the informants stated above, financial challenges are mostly experienced by 4Ps beneficiaries. Financial challenges of Senior High School students includes increased spending for school and non-school needs, compromised household expenses, difficulty in supporting the education of senior high and non-senior high children, increased educational expenses, financial burden, difficulty in managing income, difficulty in dealing with tuition and miscellaneous fees, compromised personal and social expenses, and the need to generate extra income and borrow money to support the education (Yulianto, 2021).</p>"+
			"<h2>II.  Positive Experience</h2>"+
			"<p>Positive experiences in life encompasses a range of positive emotions and influences. According to positive psychology, these experiences include happiness, joy, inspiration, love, and contentment. They are part of what constitutes the pleasant life, the engaged life, and the meaningful life (Ackerman, 2019).</p>"+
			"<h2>A.	Financially Stable</h2>"+
			"<p>Financially stable means being confident in your financial situation. Generally, people with financial stability live without the worry of financial difficulties (Seboldt, 2023). As one of the informants said:</p>"+
			"<p style='text-align:center;'><i><q>“As a 4ps beneficiary murag wala man ko na encounter nga kanang… mga challenges sa school… kay if nay mga bayronon kay pangbayaran man guro na kay naa man tung 4Ps sad kay isa sad ang kwarta sa mga ano…” (Lines 633-635 of informant #10)</i></p>"+
			"<p>Above shows that 4Ps beneficiary student became financially stable because of the program’s assistance. A study conducted by Flores et al. (2019) revealed that another positive impact of the program is that it lessened the family-beneficiaries’ financial worries thereby helping students focus more on their schooling.</p>"+
			"<h2>B.	Enjoying Quality Life</h2>"+
			"<p>Quality of life refers to how an individual feels about their current station in life. It includes their perception of their overall well-being, as well as goals, expectations, and concerns. Factors that play a role in the quality of life vary according to personal preferences, but they often include financial security, job satisfaction, family life, health, and safety. An informant stated:</p>"+
			"<p style='text-align:center;'><i><q>“Pobre man mi sa una karon kay medyo dili na lisud”. (Lines 251 of informant #40)</i></p>"+
			"<p>The informant stated above how 4Ps change their life. The study of Pineda & Fabella (2019) stated that one of the positive impacts of the 4Ps program on the beneficiaries include reduced poverty, spiritual growth, improved confidence, motivation, and improved academic performance.</p>"+
			"<h2>III.  Educational Assistance</h2>"+
			"<p>Educational assistance typically refers to the provision of support for an individual’s   educational pursuits. It is a form of assistance given to students-in-crisis, to help defray school expenses and/or cost of sending students/children to school such as school fees, school supplies, school projects, allowances, and other related expenses (Dewitt, 2022).</p>"+
			"<h2>A.	Aid in School Supplies</h2>"+
			"<p>Locker, 2019 explained that <q>Aid in School Supplies</q> refers to the provision of assistance to students to obtain essential materials for their education, such as books, stationery, backpacks, and other necessary items. This assistance can come from in the form of donations, financial support, or programs aimed at ensuring that all students have access to the required supplies for their studies. One of the informants stated:</p>"+
			"<p style='text-align:center;'><i><q>“Siguro nakatabang sya sa example is mamalit ug mga notebook so syempre ang mga 4ps man jud kay dili sya dritso-dritso ra nimo makuha kay usahay bisag pasukan na wala gihapon ang 4ps pila paka bulan, pero kapag mag ano na ahm… pila na bulan kung kulang imong notebook pwede na nimo sya madungagan”. (Lines 188-191 of Informant #3)</i></p>"+
			"<p>The informant stated above that the program helped in buying school supplies, like notebooks. This statement is supported by the study of Escamillas (2019) where the result showed that the program helped the students to have allowances that they will use in buying school supplies.</p>"+
			"<h2>B.	Aid in School Requirements</h2>"+
			"<p>Aid in school requirements is a financial assistance or support to students in completing their academic projects, homework, or assignments (Bridges, 2023). As the informant stated:</p>"+
			"<p style='text-align:center;'><i><q>“Makatabang sya sa akoa kay syempre ang 4ps gamay raman akoang maangkon ana so katong mga acads nga need pud ug financial support for example project, mapalit nako sya kay naa may 4ps or akoa syang ma fulfill”. (Lines 397-399 of Informant #6)</i></p>"+
			"<p>As stated above, the 4Ps aids students in completing their school requirements like projects. Sy et al. (2019) study argued that majority of the senior high school students agreed that 4Ps motivates themselves in going to school, pushes them to perform well in the academic activities that would lead into the top of their class, and helps them to submit all of the school requirements.</p>"+
			"<h2>C.	Aid in School Fees</h2>"+
			"<p>Aid in school fees refers to financial assistance provided to cover the cost of a student’s education. This can include tuition fees, which are the charges for the teaching and academic services provided by the school, as well as other expenses related to attending school (Rogers 2023).</p>"+
			"<p style='text-align:center;'><i><q>“dako sya na tabang sa akoa as a student para pang tabang bayronon sa skwelahan”. (Lines 533-534 of Informant #8) </i></p>"+
			"<p>Informant stated above how 4Ps program helped students in paying school fees. Quicken (2019) said that the beneficiaries of the 4Ps could pay for their tuition and other fees for class and academic activities, revealing how the program have a positive impact on the beneficiaries’ finances.</p>"+
			"<h2>IV.  Financial Aid</h2>"+
			"<p>Mahinay (2022) defined financial aid as financial support given to individuals who are furthering their education. This support can come in various forms, including scholarships, grants, student loans, and work-study programs. Many countries have some kind of financial aid program for their students, 4Ps program from Philippines as an example.</p>"+
			"<h2>A.	Fulfills Basic Needs</h2>"+
			"<p>Fulfillment of students’ basic needs includes food, allowances, transportation, and health. Ensuring that students’ basic needs are met is crucial for their academic performance, persistence, graduation, and overall well-being (Villaflor, 2022).</p>"+
			"<p style='text-align:center;'><i><q>“Sa pag sa 4Ps kay nakatabang siya sa kanang basic needs namo kay mao nay 4Ps kay kanang… ay kanang… naay 4Ps jud kay magpalit mana ug bugas ug kanang mga kinahanglan namong mga materials sa balay kanang mga pang adlaw-adlaw nga kinahanglanon mupalit man dayon na siya”. (Lines 683-686 of Informants #10)</i></p>"+
			"<p>The 4Ps fulfills the basic needs of the students, like food, appliances, and daily needs. According to the study of Gumanas et al. (2019) the respondents also agreed that the 4Ps cash grant is able to satisfy the basic necessities they needed and being able to buy their 'personal wants'.</p>"+
			"<h2>B.	Lessens Financial Burdens</h2>"+
			"<p>Larkin (2020) said that lessening a financial burden refers to reducing the difficulty, worry, or hard work caused by financial obligations or responsibilities. This can be achived through various means, such as decreasing expenses, financial assistance, or working. The goal is to alleviate the strain associated with financial challenges.</p>"+
			"<p style='text-align:center;'><i><q>“As a 4ps student dili na kaayo siya bug-at magbayad sa mga fees kay nay madawat”. (Lines 247 of Informants #4)</i></p>"+
			"<p>The cash grant of the 4Ps program lessens financial burden of the students. According to Flores et al. (2019) 80% out of 115 of the respondents agreed that because of the grant, they now have lesser financial worries or burden.</p>"+
			"<h2>C.	Huge Help</h2>"+
			"<p>To consider something as a ‘huge help’ means that something or someone has provided significant assistance or support in achieving a goal or completing a task. It implies that help was substantial and made a significant difference (Layola, 2023).</p>"+
			"<p style='text-align:center;'><i><q>“dako jud siyag tabang sa akoa kanang… wala guro ko ka… dili guro ko ka grade 11 kung wala ang 4ps”. (Lines 463-464 of Informant #7)</i></p>"+
			"<p>The 4Ps program was a huge help to students. According to Respondent #4 of Talimio & Salagubang (2019) the 4Ps was very helpful especially to poor families like them. Because it helps children who wants to study most especially the students who wants to graduate.</p>";
			case 'chap22':
            chapterContent = "<h4>CHAPTER V</h4>"+
			"<h4>SUMMARY OF FINDINGS, CONCLUSION, AND RECOMMENDATIONS</h4>"+
			"<p>This chapter wraps up the overall outcomes of the analyzed qualitative data, which underwent series of investigation and interpretation, thus resulting in conclusions on the answer in response to the general and specific problems and providing recommendations based on the salient findings of the study.</p>"+
			"<h2>Summary of Findings</h2>"+
			"<p>Based on the obtained and interpreted data from the informants, the researchers determined the lived experiences of the 4Ps beneficiaries and how helpful is the financial support of the program to students in terms of meeting their academic expenses.</p>"+
			"<p>The lived experiences of the 4Ps beneficiaries were both negative and positive. Financial challenges being the major concerns of most students. However, financially stable and enjoying quality of life were also experienced by some beneficiaries.</p>"+
			"<p>Educational assistance answered the financial support of the program to students in terms of meeting their academic expenses, financial aid was also identified as a major theme of this statement. The results showed how the 4Ps program aided students in their school supplies, requirements, and fees. The program also fulfilled their basic needs, lessened their financial burdens, and was considered as a huge help.</p>"+
			"<h2>Conclusion</h2>"+
			"<p>Based on the findings of the study, it can be concluded that most senior high school 4Ps beneficiary students of Magpet National High School face similar challenges, especially financial challenges in school context. Regardless of these challenges, the 4Ps program showed positive remarks to students where it did not only aid the students to school, but it also fulfilled their basic needs and lessened their financial burden. Fostering resilience through financial assistance. It is also important to note that the program touched the lives of these students, as stated by informant #7 <i><q>dako jud siyag tabang sa akoa kanang… wala guro ko ka… dili guro ko ka grade 11 kung wala ang 4Ps</q></i>, signifying the importance of the program in students’ education.</p>"+
			"<h2>Recommendations</h2>"+
			"<p>Based on the findings, here are some recommendations prepared by the researchers for the 4Ps beneficiary students:<br>1.	The beneficiaries are encouraged to practice being financially literate. Budgeting, saving, and managing finances effectively are important aspect one may learn, using or spending money on important things rather than unnecessary objects is very important to remember. Financial literacy is a very helpful skill especially in trying times.<br>2.	Financial independence is also important to practice, especially as a beneficiary. 4Ps program is not a source of money but rather a subsidy provided by the government to lessen financial burdens of families, especially in education related expenses. Being financially independent means having sufficient financial resources to support chosen lifestyle without being too reliant on external assistance or supports.<br>3.	Lastly, it is suggested for beneficiaries to be resilient. Challenges may be faced on daily basis, but it is only a lesson, a motivation to thrive for the better. Adapting to such challenges makes one stronger. Resilience is such an important ability to have, especially in this time.</p>";
			break;
			case 'chap27':
            chapterContent = "<h4>Work-Life Balance and Organizational Commitment of Nurses in a Tertiary Hospital in Las Vegas, USA</h4>"+
			"<p style='text-indent:0;'>Visit Link: <a href='https://api.repository.upou.edu.ph/api/core/bitstreams/cd6ef7a1-f96d-40dd-abc0-d2ae6670018b/content' target='_blank'>Work-Life Balance and Organizational Commitment of Nurses in a Tertiary Hospital in Las Vegas, USA</a></p>";
			break;
			case 'chap29':
            chapterContent = "<h4>EXAMINING DISSATISFACTION WITH AN ONLINE DOCTORAL PROGRAM</h4>"+
			"<p style='text-indent:0;'>Visit Link: <a href='https://files.eric.ed.gov/fulltext/ED494941.pdf' target='_blank'>EXAMINING DISSATISFACTION WITH AN ONLINE DOCTORAL PROGRAM</a></p>";
			break;
			case 'chap31':
            chapterContent = "<h4>Technology in Schools</h4>"+
			"<p style='text-indent:0;'>Visit Link: <a href='https://hackscience.education/wp-content/uploads/2022/05/Technology-in-Schools-1.pdf' target='_blank'>Technology in Schools</a></p>";
			break;
			case 'chap33':
            chapterContent = "<h4>Genesis</h4>"+
			"<p style='text-indent:0;'>Visit Link: <a href='https://www.bible.com/bible/111/GEN.1.NIV' target='_blank'>In the Beginning</a></p>";
			break;
			case 'chap35':
            chapterContent = "<h4>Al-Fatihah</h4>"+
			"<p style='text-indent:0;'>Visit Link: <a href='https://quran.com/1' target='_blank'>Al-Fatihah</a></p>";
			break;
			case 'chap37':
			chapterContent = "<h4></h4>"+
			 "<div class='slideshow-container'>" +
            "<div class='mySlides fade'>" +
                "<img src='images/comics1.jpg' style='width:100%'>" +
            "</div>" +
            "<div class='mySlides fade'>" +
                "<img src='images/comics2.jpg' style='width:100%'>" +
            "</div>" +
            "<div class='mySlides fade'>" +
                "<img src='images/comics3.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/comics4.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/comics5.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/comics6.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/comics7.jpg' style='width:100%'>" +
			"</div>";
			break;
			case 'chap39':
            chapterContent = "<h4></h4>"+
			"<div class='slideshow-container'>" +
            "<div class='mySlides fade'>" +
                "<img src='images/western-comics1.jpg' style='width:100%'>" +
            "</div>" +
            "<div class='mySlides fade'>" +
                "<img src='images/western-comics2.jpg' style='width:100%'>" +
            "</div>" +
            "<div class='mySlides fade'>" +
                "<img src='images/western-comics3.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/western-comics4.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/westerm-comics5.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/western-comics6.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/western-comics7.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/western-comics8.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/western-comics9.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/western-comics10.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/western-comics11.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/western-comics12.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/western-comics13.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/western-comics14.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/western-comics15.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/western-comics16.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/western-comics17.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/western-comics18.jpg' style='width:100%'>" +
            "</div>" +
			"<div class='mySlides fade'>" +
                "<img src='images/western-comics19.jpg' style='width:100%'>" +
			"</div>";
			break;
			case '':
            chapterContent = "<h4></h4>"+
			"<h2></h2>"+
			"<p></p>"+
			"<p></p>";
			break;
			default:
			chapterContent = "<p>Select a chapter to view its content.</p>";
    }

    contentDiv.innerHTML = chapterContent;
}
		const buttonsWithDel=document.querySelectorAll('.sidebar button del');
		const banner=document.getElementById('alertBanner');
		const closeButton=document.getElementById('closeBanner');
		buttonsWithDel.forEach(delElement=>{
		const button=delElement.parentElement;
		button.addEventListener('click',()=>{
			banner.style.display='block';
		});
	});
		closeButton.addEventListener('click',()=>{
			banner.style.display='none';
		});
		 function toggleFields() {
            const fields = document.getElementById("edit-fields");
            if (fields.style.display === "none" || !fields.style.display) {
                fields.style.display = "block";
            } else {
                fields.style.display = "none";
            }
        }

        function previewImage(event) {
            const reader = new FileReader();
            reader.onload = function () {
                const img = document.getElementById("profile-img");
                img.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }

        function saveChanges() {
            const name = document.getElementById("name-input").value;
            const info = document.getElementById("info-input").value;
            const bio = document.getElementById("bio-input").value;

            if (name) document.getElementById("display-name").textContent = name;
            if (info) document.getElementById("display-info").textContent = info;
            if (bio) document.getElementById("display-bio").textContent = bio;
            document.getElementById("edit-fields").style.display = "none";
        }
		document.addEventListener('mousemove', function(e) {
		const sparkle = document.createElement('div');
			sparkle.classList.add('sparkle');
			sparkle.style.left = `${e.pageX - 6}px`; 
			sparkle.style.top = `${e.pageY - 6}px`;
		document.querySelector('.sparkles').appendChild(sparkle);
		setTimeout(() => {
			sparkle.remove();
			}, 1000); 
		});
		
	

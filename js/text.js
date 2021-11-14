/*
text.js
by Logan Davis

Description:
    A storage for modular memoir text sections.
    This code is very case specific to best serve 
    text and audio handling for *Release*

4/29/17 | MIT License
*/

function open_gate(gate_id,template_name,audio_name){
    /* inserts a text template based on template_name
     * at tag with id = gate_id.
     *
     * Starts audio object named audio_name.
     * Also starts switches and shuffles based on
     * template_name.
     */
     var prev_height = document.body.scrollHeight;
     window.scrollTo(0,document.body.scrollHeight);
     document.getElementById(gate_id).insertAdjacentHTML("beforeend",template_name); //expand text
     document.getElementById(gate_id+"_trigger").onclick = ""; //kill onclick of gate
     document.getElementById("post_"+gate_id).innerHTML = ""; // clear area after new text
     window.scrollTo(0,prev_height+50);
     activate_audio(audio_name);
     setSwitches(template_name);
}
eval1 = `<img src="img/strengths.jpg" height="100%" width="100%"></img>
        <span class="gate" id="seq_gate_from_eval1_trigger" onclick='open_gate("seq_gate_from_eval1",sequences,audio_for_sequences);'>
        Sequences.
        </span>
        <div id="seq_gate_from_eval1"></div>
        <div id="post_seq_gate_from_eval1"></div>`
eval2 = `<img src="img/summary1.jpg" height="100%" width="100%">
         <img src="img/summary2.jpg" height="100%" width="100%">
         <img src="img/summary3.jpg" height="100%" width="100%">
         <img src="img/summary4.jpg" height="100%" width="100%">
         <span class="gate" id="python_from_eval2_trigger" onclick='open_gate("python_from_eval2",python,audio_for_python);'>
         Python.
         </span>
         <div id="python_from_eval2"></div>
         <div id="post_python_from_eval2"></div>`
eval3 = `<img src="img/momsletter.jpg" height="100%" width="100%">
         <span class="gate" id="death_gate_from_eval3_trigger" onclick='open_gate("death_gate_from_eval3",death,blank);'>
         Death.
         </span>
         <div id="death_gate_from_eval3"></div>
         <div id="post_death_gate_from_eval3"></div>`
eval4 = `<img src="img/youngeval1.jpg" height="100%" width="100%">
         <img src="img/youngeval2.jpg" height="100%" width="100%">
         <img src="img/youngeval3.jpg" height="100%" width="100%">
         <span class="gate" id="busride_gate_from_eval4_trigger" onclick='open_gate("busride_gate_from_eval4",busride,audio_for_budride);'>
         Busride.
         </span>
         <div id="busride_gate_from_eval4"></div>
         <div id="post_busride_gate_from_eval4"></div>`

badfood=`<h1>Bad Food:</h1>
    <hr>
    <p>
        So this is what food poisoning feels like. <br> 
        I think the volume that I have thrown up is <br> 
        greater than the food that made me sick. <br> 
        We are totally going to get charged extra for <br> 
        this and the technician that needed to open that <br> 
        safe. Why did Jake put his wallet in there? <br>
        <span id="badfood_switch1"> Why did I let him put it in there</span>? <br>
        <span id="badfood_switch2"> I just want to go home.</span> <span class="gate" id="seq_gate_from_food_trigger"
        onclick='open_gate("seq_gate_from_food",sequences,audio_for_sequences);'>Fuck this. <br>
    </p>
    <p>
        I know this is supposed to be for Jake and all. <br> 
        He has been clean for a year and he wants to celebrate <br>        
        it with me and Brad. But why the fuck did he want to go to <br> 
        botanical gardens in Delaware? Why Delaware? <br> We
        could have gone to gardens in<span id="badfood_switch3"> Jersey</span>, but no. <br> 
        Fucking Delaware. <br>
    </p>
    <p>
        Never once have I heard someone <span class="gate" id="eval4_gate_from_food_trigger" onclick='open_gate("eval4_gate_from_food",eval4,audio_for_eval_4);'> advocating </span> for a visit, <br> 
        move, road trip, or exodus to Delaware. Why would <br> 
        Jake choose here? Him and Brad both drove up into Pennsylvania <br> 
        tonight because they actually wanted to do something other than <br> 
        look at flowers. I however, having ordered the chicken for dinner, <br> 
        am now stuck vomiting my brains out in hotel toilet. <br>
    </p>
    <p>
        Now those poor bastards have to drive back down here just to <br> 
        drive ride back through to Amish state because I live about <br> 
        20 miles from where they are currently shooting off fireworks. <br> 
        Or they don't come back for me and then I am really fucked. <br> 
        Also, why did they drive out of state to shoot fireworks? They <br> 
        are legal here. They BOUGHT them here, why would they not <br> 
        realize it's okay to set them off without <span class="gate" id="busride_gate_from_food_trigger" 
        onclick='open_gate("busride_gate_from_food",busride, audio_for_budride);'>driving <br>
        200 miles north?</span><span id="badfood_switch4"> Why did they leave when I am sick</span>? <br>
    </p>
    <p>
        I know they popped into Philly to go see some strippers, which <br> 
        would explain the initial venture northward. Though even I <br> 
        could have guessed no strip joint would be open on a Monday. <br> 
        They also mentioned something about people  <span class="gate" id="eval1_gate_from_food_trigger" onclick='open_gate("eval1_gate_from_food",eval1,audio_for_eval_1);'> lying in the <br> 
        streets.</span> <span id="badfood_switch5"> Did they see a dead guy?</span> <br>
    </p>
    <p> 
        When are they going to get back? It's 3 in the morn...ugh. <br> 
        <span class="gate" id="goodbye_gate_from_food_trigger" 
        onclick='open_gate("goodbye_gate_from_food",goodbye,blank);'>I should get up, I think I am going to be sick again.</span> <br>
    </p>
    <div id="goodbye_gate_from_food"></div>
    <div id="post_goodbye_gate_from_food">
    <div id="eval1_gate_from_food"></div>
    <div id="post_eval1_gate_from_food">
    <div id="busride_gate_from_food"></div>
    <div id="post_busride_gate_from_food">
    <div id="eval4_gate_from_food"></div>
    <div id="post_eval4_gate_from_food">
    <div id="seq_gate_from_food"></div>
    <div id="post_seq_gate_from_food"></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>`
goodbye = `<h1>Goodbye:</h1>
		<hr>
		<p>
			My mother always tells me that when she dropped me off at college, I said "It's going to be okay, right?" <br /> She replied
			to me in a calm, measured tone "of course." After that she started her drive back to Jersey, <br /> she cried for a
			few hours. I nervously wandered around trying to find my trip leaders for orientation. <br />
		</p>
		<p>
			The longest paper I had ever written prior to Marlboro was about 6 pages. I wrote them once, never proof read <br />			
            them, and now I couldn't tell you what a single one was about. Most of my high school writing was in the <br /> form of
			single-page short stories that used words from a book of insults because our teacher was <br /> passive aggressive
			towards the course evaluators. <br />
		</p>
		<p>
			I had to write papers about medieval history my first semester. They were terrible. All of them rambled on, were <br />			
            full of typos, and had no particular claim. I failed that semester's writing portfolio with a 2.25 out of 4. <br />
		</p>
		<p>
			There were people who tried and help with my time management, but I had no one to go to for my papers (or at least that <br/>
             was how I felt, given that I knew how far behind I was). 
            
            <span class="gate" id="csharp_gate_from_goodbye_trigger" onclick='open_gate("csharp_gate_from_goodbye",csharp,audio_for_csharp);'> 
             It took me a fair deal of time and a huge amount of time and stress to get somewhere 
            </span> with writing. <br />
		</p>
		<p>
			Anxiety was also a factor. I was surrounded by new people in a place that I felt I could have been kicked out <br /> in
			a moments notice. 
        
            <span class="gate" id="python_from_goodbye_trigger" onclick='open_gate("python_from_goodbye",python, audio_for_python);'> 
             I was failing introductory courses 
            </span> while my classmate was getting his second book published. <br />
		</p>
		<p>
			I remember crying to my father over the phone in the middle of a panic attack. I also recall when I was talking <br />			
            my mother about the fact that the meds I was given for anxiety were heavily affecting my memory. The day <br /> after,
			I could be found vomiting in a ditch along South Road after drinking too much. <br />
		</p>
		<p>
			I never use to drink when I was young. I took too many medications. The doctors always told me my liver was <br /> in a
			fragile state. Given how often I had blood tests, I believed them. I was able to stop taking medication <br /> though.
			Not so much by choice, but because I would forget to take it in my all-night-writing-binges. <br /> Before I knew it,
			I hadn't taken anything in a month. <br />
		</p>
		<p>
			I didn't feel any different. Though the writing I produced became clearer. <br />
		</p>
		<p>
			My mother was mostly right. 
            <span class="gate" id="grandparents_gate_from_goodbye_trigger" onclick='open_gate("grandparents_gate_from_goodbye",grandparents, audio_for_grandparents);'> 
            It is okay now, but it wasn't for a time. </span> The late nights of responding to Town Meeting <br>
            emails; the stress of possibly losing financial aid; and nights when I missed dinner and had to <br /> 
            write until 5AM on a collapsing stomach were not okay. But this, right now, is. <br />
            </div>
		</p>

            <div id="grandparents_gate_from_goodbye"></div>
            <div id="post_grandparents_gate_from_goodbye">
            <div id="python_from_goodbye"></div>
            <div id="post_python_from_goodbye">
            <div id="csharp_gate_from_goodbye"></div>
            <div id="post_csharp_gate_from_goodbye">
            </div>
            </div>
            </div>`
busride = `<h1>Bus Ride:</h1>
    <hr>
    <p>
    Given how I'm leaning against this window, I hope we don't <br> 
    hit a speed bump.<span id="bus_switch1"> I am always afraid my head will do through the glass</span>.
    <br> I have spent too much time on this bus. <br>
    </p>
    <p>
    One hour drives, each way, one hundred and eighty days a <br> 
    year for nine years; I have spent 3960 hours in this bus. <br> 
    The ride is about thirty five miles each way. Which means I <br> 
    have traveled at least 138600 miles over that period of time. <br>
    <span id="bus_switch2"> I feel gross thinking about it that way.</span> <br> 
    So many hours spent. <br>
    </p>
    <p>
    I think the ride would be better if there was someone <br> 
    else on bored other than the bus driver. Most kids rides <br> 
    are an hour long, but at least they have someone to talk to. <br>
    <span id="bus_switch3"> I just have to make friends with the rotating drivers.</span> <br> 
    Why can't I live closer to my friends? <br>
    </p>
    <p>

    <span class="gate" id="seq_gate_from_bus_trigger" onclick='open_gate("seq_gate_from_bus",sequences,audio_for_sequences);'> ... <br>
    
    </p>
    <p>
    Oh look, another accident. Fuck, that person's car on fire. <br> 
    Where are the police? Where is anyone? Is that car just <br> 
    on fire on the side of the road? It looks like it has been <br> 
    burning for awhile. <br>
    </p>
    <p>
    At least people are freaked out enough by it that there don't <br> 
    seem to be many rubber-neckers...Other than me, of course. <br> 
    There have to be two or three accidents a day on this highway. <br>
    <span id="bus_switch4"> It's a fucking miracle that I haven't been in more.</span> <br> 
    My neck still isn't right from that last one. <br>
    </p>
    <div id="seq_gate_from_bus"></div>
    <div id="post_seq_gate_from_bus">
    </div>`

sequences = `<h1>Sequences</h1>
			<hr>
			<p>
			I just want to go to sleep.        
            <span class="gate" id="sound_from_seq_trigger" onclick='open_gate("sound_from_seq",sound,audio_for_sound);'> 
            My head hurts.<br/>
             </span>
			</p>
			<p>
				<span id="seq_switch1">We have to learn cursive</span>. The teacher says it<br/> 
				is something everyone needs to learn, it's<br/>				
				just what you do. I can't read cursive...<br/> 
				well, I can't properly read print either,<br/> 
				but I really can't cursive. I have spent the last<br/> 
				thirty minutes writing fifty lower case "a"s. Then<br/> 
				I get to spend thirty more minutes writing fifty lower<br/> 
				case "b"s...then I get to do it with the next 24 letters.<br/> 
				Oh, wait, then it's uppercase. I am <span id="seq_switch2">going to be up all<br/>
	 	    night doing</span> this.<br/>
			</p>
			<p>
				<span id="seq_switch3">Who came up with the cursive letter for uppercase "G"s? What
	     is wrong with them?</span><br/>
			</p>
			<p>
				Why am I not learning how to read? Why <span id="seq_switch4">am I spending</span> time learning<br/> 
				an <span class="gate" id="csharp_from_seq_trigger" onclick='open_gate("csharp_from_seq",csharp, audio_for_csharp);'>entirely new and even more confusing </span> <br>                
                way to write a language that<br/> 
				I already struggle with? <span id="seq_switch5">Why are they</span>	doing this?<br/>
			</p>
             
			<p>
				<span class="gate" id="goodbye_gate_from_seq_trigger" onclick='open_gate("goodbye_gate_from_seq",goodbye,blank)'>
                <span id="seq_switch6">I want to cry.</span>
                </span>
            </p>
            <div id="csharp_from_seq"></div>
            <div id="post_csharp_from_seq">
            <div id="goodbye_gate_from_seq"></div>
            <div id="post_goodbye_gate_from_seq">
            <div id="sound_from_seq"></div>
            <div id="post_sound_from_seq">
            </div>
            </div>
            </div>`

grandparents = `<h1>Pops and Grandma:</h1>
	  <hr>
	  <p>
	  <span id="grandparents_switch1"> I don't want to be here.</span><br>
	  The family is all gathered around at this old inn again, eating <br>
	  and laughing. <span id="grandparents_switch2"> I guess we wouldn't all be here if they were around.</span><br>
	  I don't think we will ever come back. <br>
	  </p><p>
	  <span id="grandparents_switch3"> Now pops and grandma both overlook the Delaware.</span><br>
      <span class="gate" id="death_gate_from_grandparents_trigger" onclick='open_gate("death_gate_from_grandparents",death,blank)'>
      One died as I started school, the other dies as I finish it. </span>
	  I wonder <br>
	  what they would say if they were here. They would probably demand <br>
	  to know why my food hasn't been served yet. I know the tavern is <br>
	  busy, but everyone else's food has been out for an hour. <br>
	  <span id="grandparents_switch4"> They must have forgotten about it. </span><br>
	  </p><p>
	  Actually, I don't know what grandma would say. <br>
	  <span id="switch5"> I don't have a good memory of her.</span><br>
	  <span class="gate" id="eval3_gate_from_grandparents_trigger" onclick='open_gate("eval3_gate_from_grandparents",eval3,audio_for_eval_3);'> I have heard enough </span> stories that they are all I really know
		about her. <br>
	  All I can clearly recall is her in a red bandana on her head, sitting in <br>
	  the Old Farms kitchen. She died not too long after that. <br>
	  </p><p>
	  Pops, on the other hand, I have numerous memories with. <br>
	  <span id="grandparents_switch6"> Watching him build a bar and how proud
	  he was when he finished. </span> <br>
	  <span id="grandparents_switch7"> All of those Christmases and
		Thanksgivings. </span> <br>
	  <span id="grandparents_switch8"> All of the symphonies we went to
		together. </span> <br>
	  I got the chance to know him. <br>

      <div id="eval3_gate_from_grandparents"></div>
      <div id="post_eval3_gate_from_grandparents">
      <div id="death_gate_from_grandparents"></div>
      <div id="post_death_gate_from_grandparents">
      
      </div>`
death = ` <h1>Death:</h1>
        <hr>
        </p>
        <p>
            I have never seen death. I have seen someone dying and I have <br> 
            seen someone dead, but never the moment in between the <br> 
            two. What is described as a "look in their eyes," or a <br> 
            "sound of a resigned sigh" that tells you that they realize <br> 
            they are about to die is something I have never witnessed. <br>
        </p>
        <p>
            The earliest person I can remember that I saw dying was <br> 
            my grandmother. I was too young to know what the <br> 
            bandanna on her head meant, but I knew it wasn't good. <br> 
            She is also the earliest person I saw dead, I believe. I don't <br>    
            remember much from the few years following her death. <br>
        </p>
        <p>
            What I do remember is that I typically have a delayed <br> 
            response when I find out someone has died. For a day or <br>    
            two after the news I am sad, but after a dat or two I move <br> 
            into a deeper stage of mourning. I'll fall into bouts of <br> 
            crying for a few minutes and then be fine for the next few <br> 
            hours. There are only two deaths I can remember crying <br> 
            immediately after: my aforementioned grandmother and <br> 
            her husband, my grandfather. <br>
        </p>
        <p>
            My grandfathers death was particularly strange; it <br> 
            was the day before my other grandmother's birthday. <br>    
            Though a cried when I heard he died, I sobbed when I <br> 
            wished my grandmother a happy birthday the next day. <br> 
            She cried with me. <br>
        </p>
        <p>
            My mother's side of the family talks about death plainly. <br> 
            We talk about those who passed. We talk about those who <br> 
            are passing. We talk about our own death as well. It's <br> 
            never sad. Typically it has a gallows-humor tone to it. To <br> 
            my fathers family death is a topic to be discussed <br> 
            amongst the men behind a closed door. Never should you <br> 
            speak of it at near the dinner table. <br>
        </p>
        <p>
            I have never cared to give death much of a thought past <br> 
            the brief, honest evaluation of possibility before I do <br> 
            something stupid. I have talked about my death in front <br> 
            of family members to mixed response. 
            
            <span class="gate" id="phil_from_death_trigger" onclick='open_gate("phil_from_death",phil,blank)'>
            It is because I am <br> too young </span>
            , not because of what I say, which surprises me. <br> 
            What reasonable thing could I say about it? I know <br> 
            nothing on the subject. I have never seen death. <br>

            <div id="phil_from_death"></div>
            <div id="post_phil_from_death">
        </p>
        <p>`
phil = ` <h1>"Phillip is filling up his cup:"</h1>
        <hr>
    <div id='shuffle_phil_1'>
	<p>You walked in and wouldn't introduce yourself. Neck craned forward and hands uncomfortably pressed 
	against your sides like you were mimicking a tall bird. We couldn't stop staring at your bowl cut. 
	I am sorry.</p>

	<p>You wanted us to call you Phil and you wanted us to laugh. Never once did we not laugh at a joke of 
	yours, unless you were laughing to much at it to get to the punch line. You seemed addicted to 
	laughter, both yours and others.</div> I will always remember, clear as day, when you walked to the back 
	of a quiet classroom and poured yourself water:</p>

        <p>"Phillip is filling up his cup."</p>

    <div id='shuffle_phil_2'>
	<p>You laughed hard enough that you needed an inhale. We looked at you like you were a freak. You were a freak. 
	We were all freaks. Eli couldn't focus, Billy threw chairs, Aaron couldn't add, I couldn't read, and 
	you tried to kill yourself. We didn't know that until later. </p>

	<p>You left for district. You left us in Center. We didn't talk for years. I got updates periodically through 
	Billy, but he was too strung out to recall what clean clothes looked like most of the time, or maybe his 
	parents missed a water bill. I don't know. But he left soon after you did, so I lost all contact with you. 
	I am sorry. </p>

	<p>What happened? How did you choose to become an engineer? Where did you go to school? Why did you go to that 
	specific school? I don't know. I won't know. Why should I know? You left and I stayed. You made it out. 
	You made it out. You made it out.</p>

	<p>What the fuck does that even mean? Austin went to prison, Nathan is peddling shit, Jake went in and out 
	of programs for addiction, and you died. Why did we want to get out?</p>

	<p>You were told to get out enough by teachers. You would interrupt a class with a joke or do something stupid 
	and Mr Z. would yell "PHIL." You would turn to him with a blank stare of confusion and then throw another
	pencil into a spinning ceiling fan because you were bored.</p>

	<p>You were always bored. You never had enough work to do. Anything we were assigned you would have done before 
	teacher finished explaining the prompt, so you often did the wrong thing. You didn't redo it though, you 
	already did work.</p> </div>


	<p>My parents still have the picture of us from seventh grade. The picture where you stepped forward right before 
	it was taken. You did it to look taller than the rest of us; you just looked out of place.  Sometimes people 
	say "I can't picture them as an adult" when young people die. I think you were always out of place. 
	I am sorry.</p>`

csharp = `<h1>C#:</h1>
      <hr>
	  <p>
	  I guess it is time to get back to work. <br>
	  <span id="csharp_switch1"> Mr O. wants me to copy more code </span>. <br>
      <span class="gate" id="sound_from_csharp_trigger" onclick='open_gate("sound_from_csharp",sound, audio_for_sound);'> 
      <span id="csharp_switch2"> I want to enjoy this, but I don't <br>
	  understand what is happening.</span></span> 
      <span class="gate" id="color_from_csharp_trigger" onclick='open_gate("color_from_csharp",color,blank);'> 
      I am not sure </span> how <br>
	  I am supposed to make this into a class <br>
	  for them to teach, but maybe <span class="gate" id="eval2_from_csharp_trigger" onclick='open_gate("eval2_from_csharp",eval2,audio_for_eval_2);'> that is the reason they are <br>
	  having me do it</span>:<span id="csharp_switch3"> they don't know how to either</span>. <br>
	  </p>
	  <p>
	  Let me look at the example code: <br>
	  </p>
	  <p id="shuffle_csharp">
	  var target : Transform; //the enemy's target <br>
	  var moveSpeed = 3; //move speed <br>
	  var rotationSpeed = 3; //speed of turning <br>
	  <br>
	  var myTransform : Transform; //current transform data of this enemy <br>
	  <br>
	  function Awake() <br>
	  { <br>
	      myTransform = transform; //cache transform data for easy access/performance <br>
	  } <br>
	  <br>
	  function Start() <br>
	  { <br>
	      target = GameObject.FindWithTag("Player").transform; //target the player <br>
	  }<br>

	  function Update () { <br>
	      //rotate to look at the player <br>
	      myTransform.rotation = Quaternion.Slerp(myTransform.rotation, <br>
	      Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime); <br>
	  <br>
	      //move towards the player <br>
	      myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime; <br>
	  } <br>
	  </p>
	   <p>
	  Yup, about as <span id="csharp_switch4"> understandable </span>as ever. <br>
	  Well, lets put it in the game and see what it does. </p><br>
	   <p>
	  ... <br>
	   </p><p>
	  <span id="csharp_switch5"> Oh, the zombies are chasing me</span>. <br>
	  This was only, like, 10 lines of code. <br>
	  <span id="csharp_switch6"> How</span> are they doing that? <br>
	  <span id="csharp_switch7"> I am really lost now. </span>  <br>
	  <span id="csharp_switch8"> How does the code know who the playeris? </span><br>
	   
      <span class="gate" id="python_from_csharp_trigger" onclick='open_gate("python_from_csharp",python,audio_for_python);'> 
      How do I study this?
      </span>

      <div id="python_from_csharp"></div>
      <div id="post_python_from_csharp">
      <div id="color_from_csharp"></div>
      <div id="post_color_from_csharp">
      <div id="eval2_from_csharp"></div>
      <div id="post_eval2_from_csharp">
      <div id="sound_from_csharp"></div>
      <div id="post_sound_from_csharp">
      </div>
      </div>
      </div>`
python = `<h1>Python:</h1>
        <hr>
        <p> It's one in the morning on a Tuesday. I have class tomorrow and I cannot even finish the first assignment.
        All my program has to do is display "Hello, world." Instead I am staring at black screen with a small sentence in
        harsh white text:</p>

       <p>"What the fuck did I get myself into..." </p>

       <p>  
       <span class="gate" id="color_from_python_trigger" onclick='open_gate("color_from_python",color,blank);'> 
         I don't get it.
        </span>
        I am supposed to just write "print" before "Hello, World." But how do I run the program?
        Why does that work? <span id="python_switch_1">I really spent eleven years reading nonsense words to figure out how to spell to get stuck on this.</span></p>
        

        <p id="python_switch_2"> Maybe they were right, I am going to be a gas station attendant. They told me otherwise, but I know.</p>

        <p>No, no, no. <span id="python_switch_3">I can figure this out</span>. Let me look at the class notes.</p>
        <p>
        <div id="python_shuffle_1" meta="from: http://cs.marlboro.edu/courses/fall2013/python/notes/getting_started">
        Here's the "hello world" program in python : <br>
        # This file is hello.py - a first short program in python. <br>
        print "Hello world" <br>
        From a terminal program (the $ is the prompt waiting for you to type), in the same folder as the file (see below for more) <br>
        $ python hello.py <br>
        Hello world! <br>
        You should have this working this week. Again - you need help, ask, don't wait and get behind. <br>
        </div>
        </p>
        <p>I am absolutely fucked.</p>
    
        <p id="python_switch_4">I mean, I know I didn't do much reading in highschool nor did I do very much math, but this should be simple. Maybe this is why Mr. O said he couldn't teach me programming, he never was able to learn.</p>
    
        <p>What am I going to tell <span id="python_switch_5">Jim</span>. I just got to college and I am already hitting a wall.</p>
    
        <p id="python_switch_6">I am no better than I was.</p>
    
        <p>Let me try this again: <br>
            >>> print "Hello world."<br>
            Hello, world <br>
        </p>

        <span class="gate" id="joy_from_python_trigger" onclick='open_gate("joy_from_python",joy,blank);'> 
        <p id="python_switch_7">Wait, it worked...it actually worked. Let me try it again.</p>
        </span>
         
        <p>
        <div id="python_shuffle_2">
            $ Print "Hello world." <br>
            NameError: name 'Print' is not defined <br>
        </div>
        </p>
        
        <p id="python_switch_8">Fuck, why didn't that work.</p> 



        <div id="joy_from_python"></div>
        <div id="post_joy_from_python">
        <div id="color_from_python"></div>
        <div id="post_color_from_python">
        </div>
        </div>`
joy = ` <h1>Joy:</h1>
    <hr>
    <p>
    It was once told to me, when I studied music, <br>
    the feeling of conducting an orchestra. The <br>
    adrenaline rush when, with the flick of a wrist <br>
    brass bellows, strings hum, drums crash, and <br>
    woodwinds whistle.
    <span class="gate" id="sound_from_joy_trigger" onclick='open_gate("sound_from_joy",sound,audio_for_sound);'> 
    All on time. All in harmony. <br>
    </span>
    </p>
    <p>
    When writing a program, there can be what feels <br>
    like an eternity of fixing, tuning, and rewriting code. <br>
    It is like some old comedy skit where someone plugs <br>
    a hole in a leaky roof to only find two more leaks created <br>
    because of the fix. Sometimes the answer is to just rebuild <br>
    the entire roof. Sometimes you just keep tacking gum to <br>
    the ceiling hoping that it doesn't cave in on you. <br>
    </p>
    <p>
    After this period of debugging though, there is a moment. <br>
    It can be brief, it can be half founded, and it can lead you <br>
    into a whole new stage of debugging, but it is there. <br>
    It's when something works. <br>
    </p>
    <p>
    Your debugging tools are running. You just finished a <br>
    new line of code that hopefully stops whatever the hell <br>
    was throwing some system-crashing exception. Yet <br>
    another step in what seems to be a never ending hike <br>
    through stack trace after stack trace, you hit enter and <br>
    you watch your code run. <br>
    </p>
    <p>
    There is something different this time. No 78-line trace <br>
    of "function this" handed context over to "function that". <br>
    It is just a blank screen. Stress begins to make its presence <br>
    known by the sound of a held breath. It's silent, but just for <br>
    a moment. Finally, there it is: the output you expected. <br>
    </p>
    <p>
    It could just be some text on the screen; a series of data points; <br>
    rendered images; an active server connection; or some results <br>
    after folding proteins. It doesn't matter. It is there, you wanted it <br>
    to be there, and you figure out how to make the computer put it <br>
    there. <br>
    </p>
    <p>
    For a brief moment you have hundreds of billions of transistors, <br>
    just nanometers in size, processing bits at a rate between 1 and 3 <br>
    billions times a second under your control. You knew how to tell a <br>
    machine that can only subtract by using strange tricks in addition <br>
    how to carry out what could be some of the complex tasks imaginable. <br>
    You computed numbers is mere seconds that, if considered as days on a calender, <br>
    would span far past your lifetime. It didn't require years of hardened practice <br>
    or many thousands of mathematicians at your disposal. It took a text file <br>
    and a tap of a key. </p>

    <div id="sound_from_joy"></div>
    <div id="post_sound_from_joy">
    </div>`
sound = `<h1>Sound:</h1>
      <hr>
	  <p>
	  I don't <span id="sound_switch_1">get</span> music. It is <span id="sound_switch_2">overwhelming</span>.
	  </p>
	  <p>
	  The worst is during holidays. With all of my <br /> 
	  loud aunts and uncles speaking, I already get <br /> 
	  a head ache, but music just adds mud to the air. <br /> 
	  I can't <span id="sound_switch_3">think straight</span>. <br /> 
	  </p>
	  <p>
	  It feels a lot like reading. I look at a page <br /> 
	  and <span id="shuffle_sound">the text starts to move</span>, I cannot <br /> 
	  tell the words apart. Sound is the same way. I <br /> 
	  <span id="sound_switch_4">get lost in</span> the wall of noise.
	  </p>
	  <p>
	  My sister likes music, she also likes the city. <br /> 
	  I get too flustered by it, though I like skyscrapers. <br /> 
	  I want to be an <span id="sound_switch_5">architect</span> when I am <br /> 
	  older. Buildings make sense, noise doesn't. <br /> 
	  </p>
	  <p>
	  Architecture is a system, there are parts to put together <br /> 
	  and if they go up in the wrong order, <br /> 
	  <span id="sound_switch_6">it doesn't work</span>. Sound can be in <br /> 
	  any order you want it to be. A <span id="switch7">car horn</span> <br /> 
	  here and there, some <span id="sound_switch_8">yelling</span> in the distance <br /> 
	  sprinkled throughout. Sound doesn't make sense. <br /> 
	  </p>  
	  <p>
	  Music is just sound that has been <span id="sound_switch_9">reigned</span> in. <br /> 
	  It can sound like it is about to end but then <br /> 
	  it just gets louder. <br /> 
	  </p>  
	  <p>
	  I can turn away from text. <span id="sound_switch_10">Music</span> <br /> 
	  is surrounding <span id="sound_switch_11">you</span> all the time. <br /> 
	  </p>`

color = ` <h1>Color:</h1>
        <hr>
        <p>
        My first memory of my colorblindness was in preschool. <br>
        We were playing a game to learn the names of different colors <br>
        by sorting bears into piles. The bears were red, blue, green, yellow, <br>
        and purple. My kind of colorblindness allows me to see red and green <br>
        if they are the only colors on an object, but if they are mixed with <br>
        anything else (such as blue, in the case of purple) I see the <br>
        secondary color only. <br>
        </p> 
        <p> 
        I made my piles, the four I could distinguish (red, blue, green, <br>
        and yellow), and I presented it to my teacher. She told me it <br>
        was wrong and to try it again. I went back and couldn't <br>
        figure out what I had done wrong. After repeatedly saying it <br>
        was wrong, the teacher helped me. She separated my blue pile into <br>
        two groups. For the life of me I could not figure out what she was <br>
        doing. She said "these ones are blue and these ones are purple." <br>
        I thought  she was lying and making fun of me so I cried. I was <br>
        roughly three years old. <br>
        </p> 
        <p> 
        Colorblindness was been one of my two longest standing sore points <br>
        (only comparable to someone making fun of when I stutter).  I think it <br>
        is because the jokes made about it are jokes I can never be "in on." <br>
        When someone makes fun of dyslexia, I can get it because I have the <br>
        ability to read correctly; I know the contrast that creates the <br>
        joke. If someone makes fun of me not being able to see green, I can <br>
        never find the humor. Color is akin to a mathematical definition to <br>
        me: I know purple is blue mixed with red, but it is not <br>
        something that naturally occurs to me, only an idea. Since it is <br>
        impossible to just imagine a new color, it just lives in the words of <br>
        its definition. <br>
        </p> 
        <p> 
        Given my inability to really engage with color, it was never a large <br>
        part of my process. I never really liked coloring books once I found <br>
        out I was colorblind. I never really used things like sticky notes for <br>
        organization. My memories are never really in color unless an items <br>
        color has great importance to the event I am remembering. <br>
        </p> 
        <p> 
        One of the more recent problems I have run into is syntax highlighting <br>
        when writing code. Text editors for programmers often color text <br>
        differently base on what they types. Variables may be one color while <br>
        function definitions might be another. This highlighting has no effect <br>
        on my and I often don't turn it on if it is off by default. When <br>
        programming with other people it can become cumbersome for them to <br>
        look at code on my computer because it becomes this wall of black and <br>
        white colors. There is absolutely no visual assistance for them to <br>
        break up the syntax. Considering the inverse, some popular color <br>
        schemes make it entirely impossible for me to see certain kinds of <br>
        words. If someone is using a blue background (common in the very <br>
        popular "cobalt" editor scheme) and some word is colored purple, there <br>
        is no chance in hell I will be able to see it. <br>
        </p> 
        <p> 
        I came to acquire Enchroma glasses within the last year. They are <br>
        supposed to assist in correcting colorblindness. They won't totally fix <br> 
        it, they lessen the blindness. They work. I got to see purple for the <br>
        first time in my life when a friend googled it and turned the computer <br>
        screen to me as I put them on for the first time. It was totally <br>
        overwhelming. I have only wore them a handful of times. It isn't just <br>
        like correcting a lisp or stutter. It isn't like improving your <br>
        ability to consistently identify words. It is the process of unveiling <br>
        something that was 
        
        <span class="gate" id="dreams_from_color_trigger" onclick='open_gate("dreams_from_color",dreams,blank);'> 
        totally out of my grasp 
         </span>

        for the majority of my <br>
        life. Taking things you have known for years and making you aware of <br>
        an aspect you have been so plainly and fundamentally missing. I spent <br>
        four or five hours just staring at things in my room one day. Photos <br>
        of family, small wooden boxes, and notes from my god daughter looked <br>
        alien in through those lenses. They were covered in colors I had never <br>
        seen before. They didn't feel like they were mine. <br>
        </p> 

        <p> 
        I don't wear the glasses in my house anymore. <br>
        </p>
        
        <div id="dreams_from_color"></div>
        <div id="post_dreams_from_color">
        </div>`
dreams = `<h1> Dreams: </h1>
        <hr>
        <p>
        Most of my dreams are fairly average. 
        
        <span class="gate" id="dreamsII_from_dreams_trigger" onclick='open_gate("dreamsII_from_dreams",dreamsII,audio_for_dreams2);'> 
        Not average
        </span>
        
        as in the average <br>
        depiction of a dream (flying through the air of some visual mishmash <br>
        of the last book I read, TV show I watched, and week of my life). Average <br>
        as in they play out like an average day. 
        
         <span class="gate" id="gender_from_dreams_trigger" onclick='open_gate("gender_from_dreams",gender,blank);'> 
        I wake up in the dream 
         </span>

        , I go get a <br>
        drink, and then I go back to my bed and fall asleep. The only difference <br>
        is that some room will have a single weird corner (maybe it has some <br>
        kind of inexplicable geometry, or it's on fire or some other thing), or <br>
        everyone will have lost their hair, but never anything major (like there is <br>
        no gravity). They are minor differences, but other than that, the dream just <br>
        feels like an average day. Every once and a while I have a different kind of <br>
        dream though, always similar but slightly different. I have had this series <br>
        of dreams since I was in elementary school. <br>
        </p>
        <p>
        I couldn't tell you how each starts, because I can never remember a beginning <br>
        to them. The first consistent memory I have from each is walking under an <br>
        overpass. If you have ever been to New Jersey, the roads around me resemble <br>
        to spaghetti of ramps connecting I-78 and 287 where they intersect. There are <br>
        fences, poorly held up, guarding small construction vehicles telling me that a <br>
        night crew is working on a nearby section of pavement. It couldn't be this <br>
        junction though, there aren't enough cars to be Jersey. <br>
        </p>
        <p>
        At this point the dreams all take a similar path: I am trying to get to a city, I <br>
        need to get something, I meet someone on the way. Some times these people <br>
        are in cars and give me a ride, other times they are other walkers. It is always <br>
        day time when I start, then it is night, but by the end the sun is up again. <br>
        </p>
        <p>
        I talk to the person I meet. I don't know their name, I cannot recall their face, but <br>
        I know they did all the talking. Sometimes they retell stories that I know are actually <br>
        mine, but I don't interrupt them to say so (either out of respect for giving me a ride <br>
        or not wanting to drive welcome company away). Other times they tell me stories I <br>
        have never heard before, I always feel awkward being so personal with a complete <br>
        stranger. Before I know it we are on a bridge with an upward incline. They tell me that <br>
        it is my stop and I get out. It is always night by this point. I see the city back-lighting <br>
        a larger bridge being built to the right of the one I was on. The scene is not terrible <br>
        dissimilar from the current state of the Tappan Zee. <br>
        </p>
        <p>
        I have to backtrack off the bridge at this point because I cannot walk across it. Under <br>
        the bridge is an old rail yard. I walk while listening the engines and tires above. By this  <br>
        point the city is in view. I don't know its name. I don't know why I am going there. I <br>
        don't how much longer it will take to it. <br>
        </p>
        <p>
        I arrive at the cities edge; it's morning again. Now I am standing on a platform of a New <br>
        York-esque dock, with water between me and the city. It is not New York though, the <br>
        buildings aren't high enough. The overpass curves into the city, leaving support pillars <br>
        on both sides on either side of the docks inlet. The only way I can cross is by a few <br>
        rusted pipes or a log. There are people at the other side yelling for me to get over <br>
        before someone sees. I get on the thin beam to realize that I am about 30 feet above <br>
        the water. I hate heights. Someone always kicks the beam and I always go down. <br>
        </p>
        <p>
        The water is cold and smells of filth. I barely make my way to a ladder on the other side. I <br>
        manage to get on to the other side of the dock, soaking wet, and the person who kicked <br>
        me over is gone. Then the dream ends. It always ends there. I never get to enter the city. <br>
        I never remember why I am there. <br>
        </p>
        
      
        <div id="gender_from_dreams"></div>
        <div id="post_gender_from_dreams">
        <div id="dreamsII_from_dreams"></div>
        <div id="post_dreamsII_from_dreams">
        </div>
        </div>`
gender = ` <h1>Gender:</h1>
        <hr>
        <p>
        I wish I were a woman. <br>
        Every day that I look at my body I think that. <br>
        I have thought that since I was a kid, but I never told <br>
        anyone because I already felt like my connection with <br>
        those around me was strained enough. I didn't want to <br>
        stress those ties anymore than they already were. <br>
        </p>
        <p>
        I played with barbies as a kid. My mothers father <br>
        wasn't very happy about that fact. A few other people <br>
        in my non-immediate family took objection to it as well. <br>
        I didn't know about it then. Or maybe I just forgot. <br>
        </p>
        <p>
        My mother wondered if I was asexual growing up. <br>
        I dated someone briefly in my freshman year of <br>
        highschool. I could never really talk to girls in a <br>
        calm manner. Not just because of the awkwardness <br>
        of teenage years (though I am sure that didn't help), <br>
        but because I was made so keenly aware of what I was <br>
        not when I spoke to them: a girl. What I felt <br>
        during those years is what I can only <br>
        describe as a lighting-depression <br>
        </p>
        <p>

        <span class="gate" id="dreamsII_from_gender_trigger" onclick='open_gate("dreamsII_from_gender",dreamsII,audio_for_dreams2);'> 
        I didn't
        </span>
         wallowed in deep depression for weeks or <br>
        months like what my bipolar did to me. But when I looked <br>
        in a mirror, began to undress, or sat in a doctors office, <br>
        it would strike. <br>
        </p>
        <p>
        The creaking of my knees feel louder. <br>
        I would get a cold snap up my lower back. My hands <br>
        would feel heavier. My skin looked blotchier. <br>
        I would be depressed until something happened to take <br>
        my mind to other things. <br>
        </p>
        <p>
        I still think about it frequently, (not) being a woman. <br>
        Though I dressed "clash" for a little while, that didn't <br>
        feel right to me. And my build and my height are far <br>
        too masculine to pull off androgyny. <br>
        </p>
        <p>
        So I dress in clothes that fit me and are comfortable, <br>
        as to try and bring as little (self) attention to my <br>
        body as possible. I still get into funks about it though. <br>
        </p>
        <p>
        I once told my mom that if I had the choice to be born <br>
        again but as a woman, I would take it. I still stand by that  <br>
        statement. <br>
        </p>

        <div id="dreamsII_from_gender"></div>
        <div id="post_dreamsII_from_gender">
        </div>`
dreamsII = ` <h1> Dreams II: </h1>
        <hr>
        </p>
        <p>
        Why am I having these dreams. I never used to have these kinds of  <br>
        <span id="dreamsII_switch_1"> unusual</span> dreams before. I mean, <br>
        what even was that? <br>
        </p>
        <p>
        <span id="dreamsII_switch_2"> I was standing on a patio, only looking to my right. I couldn't <br>
        seem to turn my head. There as grass just beyond my feet heavily <br>
        dotted with yellow pansy flowers. They rested on a downward slope. <br>
        At the bottom of the small hill was another patio covered in wrought <br>
        iron table frames with wood tops. Above each table was a yellow <br>
        umbrella. From my viewpoint, the umbrellas were about the same size <br>
        as the adjacent pansies. It all washed into a single, colorful <br>
        movement the hills that lay even further down, creating these flumes <br>
        with the small rivers at their bases. I blinked and it was over. </span><br>
        </p>
        <p>
        I have been losing so much sleep. I think I got<span id="dreamsII_switch_3"> 12</span> hours this week  <br>
        including tonight. How am I going to code today if I can barely focus <br>
        enough to sleep?<span id="dreamsII_switch_4"> Why has this started happening now?</span> <br>
        Whatever, I am too cold to get out of these covers anyway, I will fall <br>
        back asleep at some point. I wonder if this is because I wrote about <br>
        my dreams being so mundane. I guess that piece is a lie now. <br>
        Maybe this is my brain saying "I can throw you into some  <br>
        Alice and Wonderland scenario if I want to...I just don't always feel  <br>
        like it." Maybe it's <span id="dreamsII_switch_5"> my depression coming back</span>. <br>
        Whatever, as long as I get those bugs fixed <br>
        tomorrow, I will be fine. <br>
        </p>
        <p>
        ... <br>
        </p>
        <p>
        Maybe it is because of all the cars and city noises. I have never <br>
        really had to deal with such loud nights. Typically it's <br>
        silent, but those guys at the police station were indefinitely <br>
        practicing Amazing Grace on those bagpipes when I <br>
        first got in bed. The motorcycles roaring by probably aren't helping <br>
        either. <br>
        </p>
        <p>
        It doesn't matter, nothing I can do about it.  <br>
        Just got to<span id="dreamsII_switch_6"> go back to sleep</span>. <br>
        </p>` 
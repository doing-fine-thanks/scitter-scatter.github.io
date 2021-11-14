/*
switch.js
by Logan Davis

Description:
    Defines specific functions for text switching
    in *Release* while also handling all switch/shuffle
    interval setting.

    All choices for the modular text switching are
    defined here.

4/29/17 | MIT License 
*/

function chooseFromList(list_of_choices){
    /* Returns a random item from list_of_choices
     */
    return list_of_choices[Math.floor(Math.random() * list_of_choices.length)];
}
function get_and_switch(list_of_choices,id_tag){
    /* Given an id_tag and a list of choices,
     * will randomly choose one item from the 
     * list and assign it to the content of 
     * the tagged element.
     */
    if(Math.random() > 0.9){
        document.getElementById(id_tag).innerHTML = chooseFromList(list_of_choices)
    }
}

function setSwitches(id){
    /* Given an id, sets intervals for
     * switching and shuffling related to the 
     * piece.
     */
    switch(id){
        case badfood:
            setInterval(function(){get_and_switch(badfood_switch1,"badfood_switch1")},500);
            setInterval(function(){get_and_switch(badfood_switch2,"badfood_switch2")},500);
            setInterval(function(){get_and_switch(badfood_switch3,"badfood_switch3")},500);
            setInterval(function(){get_and_switch(badfood_switch4,"badfood_switch4")},500);
            setInterval(function(){get_and_switch(badfood_switch5,"badfood_switch5")},500);
            break;
        case busride:
            setInterval(function(){get_and_switch(bus_switch1,"bus_switch1")},500);
            setInterval(function(){get_and_switch(bus_switch2,"bus_switch2")},500);
            setInterval(function(){get_and_switch(bus_switch3,"bus_switch3")},500);
            setInterval(function(){get_and_switch(bus_switch4,"bus_switch4")},500);
            break;
        case sequences:
            setInterval(function(){get_and_switch(seq_switch1,"seq_switch1")},500);
            setInterval(function(){get_and_switch(seq_switch2,"seq_switch2")},500);
            setInterval(function(){get_and_switch(seq_switch3,"seq_switch3")},500);
            setInterval(function(){get_and_switch(seq_switch4,"seq_switch4")},500);
            setInterval(function(){get_and_switch(seq_switch5,"seq_switch5")},500);
            setInterval(function(){get_and_switch(seq_switch6,"seq_switch6")},500);
            break;
        case grandparents:
            setInterval(function(){get_and_switch(grandparents_switch1,"grandparents_switch1")},500);
            setInterval(function(){get_and_switch(grandparents_switch2,"grandparents_switch2")},500);
            setInterval(function(){get_and_switch(grandparents_switch3,"grandparents_switch3")},500);
            setInterval(function(){get_and_switch(grandparents_switch4,"grandparents_switch4")},500);
            setInterval(function(){get_and_switch(grandparents_switch5,"grandparents_switch5")},500);
            setInterval(function(){get_and_switch(grandparents_switch6,"grandparents_switch6")},500);
            setInterval(function(){get_and_switch(grandparents_switch7,"grandparents_switch7")},500);
            setInterval(function(){get_and_switch(grandparents_switch8,"grandparents_switch8")},500);
            break;
        case csharp:
            //switch
            setInterval(function(){get_and_switch(csharp_switch1,"csharp_switch1")},500);
            setInterval(function(){get_and_switch(csharp_switch2,"csharp_switch2")},500);
            setInterval(function(){get_and_switch(csharp_switch3,"csharp_switch3")},500);
            setInterval(function(){get_and_switch(csharp_switch4,"csharp_switch4")},500);
            setInterval(function(){get_and_switch(csharp_switch5,"csharp_switch5")},500);
            setInterval(function(){get_and_switch(csharp_switch6,"csharp_switch6")},500);
            setInterval(function(){get_and_switch(csharp_switch7,"csharp_switch7")},500);
            setInterval(function(){get_and_switch(csharp_switch8,"csharp_switch8")},500);
            //shuffle
            setInterval(function(){
                document
                .getElementById("shuffle_csharp")
                .innerHTML = shuffleWordsFromText(document.getElementById("shuffle_csharp").innerHTML)
            },500)
            break;
        case python:
            //switch
            setInterval(function(){get_and_switch(python_switch_1,"python_switch_1")},500);
            setInterval(function(){get_and_switch(python_switch_2,"python_switch_2")},500);
            setInterval(function(){get_and_switch(python_switch_3,"python_switch_3")},500);
            setInterval(function(){get_and_switch(python_switch_4,"python_switch_4")},500);
            setInterval(function(){get_and_switch(python_switch_5,"python_switch_5")},500);
            setInterval(function(){get_and_switch(python_switch_6,"python_switch_6")},500);
            setInterval(function(){get_and_switch(python_switch_7,"python_switch_7")},500);
            setInterval(function(){get_and_switch(python_switch_8,"python_switch_8")},500);
            //shuffle
            setInterval(function(){
                document
                .getElementById("python_shuffle_1")
                .innerHTML = shuffleWordsFromText(document.getElementById("python_shuffle_1").innerHTML)
            },500)

            setInterval(function(){
                document
                .getElementById("python_shuffle_2")
                .innerHTML = shuffleWordsFromText(document.getElementById("python_shuffle_2").innerHTML)
            },500)
            break;
        case sound:
            //switch
            setInterval(function(){get_and_switch(sound_switch_1,"sound_switch_1")},500);
            setInterval(function(){get_and_switch(sound_switch_2,"sound_switch_2")},500);
            setInterval(function(){get_and_switch(sound_switch_3,"sound_switch_3")},500);
            setInterval(function(){get_and_switch(sound_switch_4,"sound_switch_4")},500);
            setInterval(function(){get_and_switch(sound_switch_5,"sound_switch_5")},500);
            setInterval(function(){get_and_switch(sound_switch_6,"sound_switch_6")},500);
            setInterval(function(){get_and_switch(sound_switch_7,"sound_switch_7")},500);
            setInterval(function(){get_and_switch(sound_switch_8,"sound_switch_8")},500);
            setInterval(function(){get_and_switch(sound_switch_9,"sound_switch_9")},500);
            setInterval(function(){get_and_switch(sound_switch_10,"sound_switch_10")},500);
            setInterval(function(){get_and_switch(sound_switch_11,"sound_switch_11")},500);
            //shuffle
            setInterval(function(){
                document
                .getElementById("shuffle_sound")
                .innerHTML = shuffleWordsFromText(document.getElementById("shuffle_sound").innerHTML)
            },500)
            break;
        case dreamsII:
            setInterval(function(){get_and_switch(dreamsII_switch_1,"dreamsII_switch_1")},500);
            setInterval(function(){get_and_switch(dreamsII_switch_2,"dreamsII_switch_2")},500);
            setInterval(function(){get_and_switch(dreamsII_switch_3,"dreamsII_switch_3")},500);
            setInterval(function(){get_and_switch(dreamsII_switch_4,"dreamsII_switch_4")},500);
            setInterval(function(){get_and_switch(dreamsII_switch_5,"dreamsII_switch_5")},500);
            setInterval(function(){get_and_switch(dreamsII_switch_6,"dreamsII_switch_6")},500);
            break;
        case phil:
            setInterval(function(){
                document
                .getElementById("shuffle_phil_1")
                .innerHTML = shuffleWordsFromText(document.getElementById("shuffle_phil_1").innerHTML)
            },500)

            setInterval(function(){
                document
                .getElementById("shuffle_phil_2")
                .innerHTML = shuffleWordsFromText(document.getElementById("shuffle_phil_2").innerHTML)
            },500)
            break;
        default:
            break;

    }
}

/* Lists of Choices for modular text switching */

//BADFOOD
var badfood_switch1 = [" Why did I let him put it in there"," Why did he close it without checking"]; 
var badfood_switch2 = [" I just want to go home."," Where are they?"," Why did I agree to come here?"]; 
var badfood_switch3 = [" Jersey"," Pennsylvania"," Virginia"]; 
var badfood_switch4 = [" Why did they leave when I am sick"," Why didn't they invite me"," Why did they do that"]; 
var badfood_switch5 = [" Did they see a dead guy?"," Were they both actually getting high?"," Philly is so fucking strange."]; 

//BUSRIDE
var bus_switch1 = [" I am always afraid my head will do through the glass"," My head hurts enough as it is"]; 
var bus_switch2 = [" I feel gross thinking about it that way."," Why do I have such a long ride?"," At least it gives me time to catch up on my sleep."]; 
var bus_switch3 = [" I just have to make friends with the rotating drivers."," I get so board on that ride. "," It gives me time to listen to my music, I guess."]; 
var bus_switch4 = [" It's a fucking miracle that I haven't been in more."," Why don't we actually fix what is causing the accidents?"," Only a matter of time before I am in another one."];

//SEQUENCES
seq_switch1 = ["We have to learn cursive","They say we have to learn cursive"];
seq_switch2 = ["going to be up all night doing","never going to be able to do","going to figure out how to do"];
seq_switch3 = ["Who came up with the cursive letter for uppercase 'G's? What <br/>is wrong with them?","Who in their right mind thought cursive-uppercase 's' as still okay when <br/> the ampersand was created?"]
seq_switch4 = ["am I spending","do I have to spend"];
seq_switch5 = ["Why are they","Why am I"];
seq_switch6 = ["I want to cry.", "I think I am going to cry.", "I am crying."];

//GRANDPARENTS
var grandparents_switch1 = [" I don't want to be here."," Pops should have been here."]; 
var grandparents_switch2 = [" I guess we wouldn't all be here if they were around."," Though I guess we are only here because of them."]; 
var grandparents_switch3 = [" Now pops and grandma both overlook the Delaware."," Now they are both in the ground."]; 
var grandparents_switch4 = [" They must have forgotten about it. "," I am so hungry."," In fact, that is what I am wondering."," Whatever it doesn't matter."," Actually, no, they would probably ask about why my sister hasn't settled down yet."]; 
var grandparents_switch5 = [" I don't have a good memory of her."," She died before I got to know her."," The medicine wiped my memory."," I was too young when she passed."]; 
var grandparents_switch6 = [" Watching him build a bar and how proud he was when he finished. "," The car crash we were both in together."," The dinners I had with him."];
var grandparents_switch7 = [ " All of those Christmases and Thanksgivings."," When I was a messager between him and my father during an argument."," How we would discuss college and my what classes I was taking."];
var grandparents_switch8 = [" All of the symphonies we went to together. "," How kind he was when my father was in the hospital."," When I was his pallbearer..."];

//C#    
var csharp_switch1 = [" Mr O. wants me to copy more code "," I have to write more code"]
var csharp_switch2 = [" I want to enjoy this, but I don't <br> understand what is happening."," I'm kind of lost right now, <br> there is a lot here."]
var csharp_switch3 = [" they don't know how to either"," If I can figure it out, anyone should be able to"]
var csharp_switch4 = [" understandable "," unreadable "]
var csharp_switch5 = [" Oh, the zombies are chasing me"," Holy shit, the zombies are moving"]
var csharp_switch6 = [" How"," Why"]
var csharp_switch7 = [" I am really lost now. "," Oh, I get it."]
var csharp_switch8 = [" How does the code know who the player is? "," How do they know to get around walls? "," Why does this really work though? "," Why does this work on all of them at once? "," Why do they seem so fast? "," How did the tutorial come up with this? "," Do AI in other games work this way? "," How do I get them to be animated so they don't just slide towards me?"]

//PYTHON
var python_switch_1 = ["Did I really spend eleven years reading nonsense words to figure out how to spell to get stuck on this?","I really spent eleven years reading nonsense words to figure out how to spell to get stuck on this."]
var python_switch_2 = ["Maybe they were right, I am going to be a gas station attendent. They told me otherwise, but I know.","Maybe I was right, I am going to be a gas station attendent. They knew."]
var python_switch_3 = ["I can figure this out","I cannot figre this out"]
var python_switch_4 = ["I mean, I know I didn't do much reading in highschool nor did I do very much math, but this should be simple. Maybe this is why Mr. O said he couldn't teach me programming, he never was able to learn.","I mean, I know I did not read in highschool nor did I do very much math, but this is hard. Maybe this is why Mr. O said he couldn't teach me programming, he didn't want to waste the time."]
var python_switch_5 = ["Jim","Mom","Dad","Matan","Pops","Grandma","Emily"]
var python_switch_6 = ["I am worse than before.","I am no better than I was."]
var python_switch_7 = ["Wait, it worked...it actually worked.Let me try it again.","Wait, it worked...why did it work? Let me try it again."]
var python_switch_8 = ["Fuck, why didn't that work.","Fuck, why can't I do this."]


//SOUND
var sound_switch_1 = ["get","like"]
var sound_switch_2 = ["is overwhelming","has no point","is just orderly noise"]
var sound_switch_3 = ["think straight","stand it"]
var sound_switch_4 = ["drown in","get lost in","feel choked by"]
var sound_switch_5 = ["architect","engineer"]
var sound_switch_6 = ["it doesn't work","you did something wrong"]
var sound_switch_7 = ["car horn","bang","crash","scream"]
var sound_switch_8 = ["yelling","shattering","trains","hammering"]
var sound_switch_9 = ["rained", "reigned"]
var sound_switch_10 = ["Music","Sound","Noise"]
var sound_switch_11 = ["you","me"]

//DREAMS II
var dreamsII_switch_1 = [" unusual"," strange"," actually fictitious"]; 
var dreamsII_switch_2 = ["I was standing on a patio, only looking to my right. I couldn't <br>seem to turn my head. There as grass just beyond my feet heavily <br>dotted with yellow pansy flowers. They rested on a downward slope. <br>At the bottom of the small hill was another patio covered in wrought <br>iron table frames with wood tops. Above each table was a yellow <br>umbrella. From my viewpoint, the umbrellas were about the same size <br>as the adjacent pansies. It all washed into a single, colorful <br>movement the hills that lay even further down, creating these flumes <br>with the small rivers at their bases. I blinked and it was over."," There was just fire over a small hill to my right. I was running <br>along side it, never quite what caused it. It was night and the pathway <br>was lit by street lights. To my left was the longest parking garage I <br>have ever seen. Just past the fire skyscrapers could be seen. I ran for <br>what felt like hours, but then tripped and woke up."," I just walked for a long time in a dark room. I started off slowly,  <br>trying to find a wall of some sort to ground myself. After what felt <br>like an eternity, I gave up. Once I gave up on the wall, I just kind <br>of walked forward. There was no light. No sound. Nothing. I couldn't <br>even tell you if it were hot or cold. I suddenly was woken up."];
var dreamsII_switch_3 = [" 12"," 5"," 20"," jack-shit"]; 
var dreamsII_switch_4 = [" Why has this started happening now?"," Well, it hasn't stopped me before."," I am just going to have a head ache."]; 
var dreamsII_switch_5 = [" my depression coming back"," just my luck"," living in this fucked up house"," because this job is so tiring"]; 
var dreamsII_switch_6 = [" go back to sleep"," get out of here"]; 
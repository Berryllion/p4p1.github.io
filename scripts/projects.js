function disp_p4p1(lang) {

    document.getElementById('box_content').innerHTML='<div id="box_header"><h2 id="inner_box_title"><span id="box_logo"></span> | <span id="box_title"></span></h2></div><div id="box_description"></div><table id="box_footer" style="width:100%"><tr><th>&lt;</th><th id="box_footer_left_icon"></th><th>|</th><th><a id="box_footer_source" href="#">source</a></th><th>|</th><th id="box_footer_right_icon"></th><th>&gt;</th></tr></table>';

    document.getElementById('box_logo').innerHTML = '<img src="https://p4p1.github.io/img/peachx2.png" />';
    document.getElementById('box_title').innerHTML = 'p4p1';
    document.getElementById('box_footer_left_icon').innerHTML = '<img onclick="disp_mpcn(\''+lang+'\');" width="25px" height="25px" src="img/mpcn.png"/>';
    document.getElementById('box_footer_source').href = 'https://github.com/p4p1/p4p1/';
    document.getElementById('box_footer_right_icon').innerHTML = '<img onclick="disp_larp(\''+lang+'\');" src="https://p4p1.github.io/img/lemonx2.png" />';
    if (lang == "English"){
        document.getElementById('box_description').innerHTML = "<h4>Presentation:</h4><p>This is a remote administration tool that allows you to put a shell on your' machine. This shell controls one or multiple other machines. It has a client and server side. The server side of the application is cross platform, and the client side is only Windows compatible. Each client is manually configured and will connect to an the ip that is hard coded inside of it's binary or from a configuration file that is on the clients computer. This is an example of the hard coded configuration file(it's just a header file with special macros):</p><img src='img/cfg.png'/><p>green -> port | red->ip address | white -> advanced configuration<br />The binary can also be configured with individual files by the name of ip.cfg or port.cfg.On the network side of things p4p1 works in a star map, it could be visualised like this:</p><img width='330px' height='207px' src='img/network_map.png' /><p>Because of the network configuration, the server can send commands to individual clients or send to every client that is online.</p><h4>In depth explanation</h4><p>p4p1's client inner working's is verry simple. It has 3 main steps:</p><img src='img/main_p4p1_code.png' /><p>The first step is in green it initializes the connection to the server, then in blue it goes into the command handler loop. The last step is in pink, this last part clean's up after the user finished interacting on the machine, and it closes the connection.</p><br /><p>For more information look at the <u><a href='https://github.com/p4p1/p4p1/wiki'>wiki</a></u>.</p>";
    } else {
        document.getElementById('box_description').innerHTML = "<h4>Pr&eacute;sentation:</h4><p>Ce logiciel est un programme qui permet d'effectuer une connection grace a un shell sur un autre ordinateur. Vous pouvez controler une a plusieur machine connecter a vous. Base sur une application cote server/client. Chaque client est configurer manuellement dans le code ou avec des fichiers de configuration. Pour le server il fonctionne grace a python, il a donc une nature \"Cross Platform\". Il y a un exemple de configuration pour le client si dessous:</p><img src='img/cfg.png'/><p>vert -> port | rouge -> addresse ip | blanc -> configuration avanc&eacute;e<br />La configuration du client avec les differents fichier ce presente sous la forme: ip.cfg | fichier qui contient l'addresse IP. Pour la configuration reseau de p4p1. On peut representer le reseau p4p1 sous forme d'&eacute;toile comme ceci:</p><img width='330px' height='207px' src='img/network_map.png' /><p>Grace a cette formation pour le reseau, on peut grace au serveur envoyer des commandes a une ou plusieur machine.</p><h4>Vue en profondeur:</h4><p>Le fonctiononement du client p4p1 est tr&egrave;s basique. Elle fonctionne sur 3 pilli&eacute; principaux:</p><img src='img/main_p4p1_code.png' /><p>Premi&egrave;rement, en vert, la connection au serveur est initializ&eacute;. Ensuite en bleu le programme passe en mode r&eacute;ception et traitement de commande. La troisi&egrave;me et d&egrave;rni&egrave;re partie, en rose, g&egrave;re le n&eacute;toyage du programme et f&egrave;rme la connection.</p><br /><p>Pour plus d'information, consulter le <u><a href='https://github.com/p4p1/p4p1/wiki'>wiki</a></u>.</p>";
    }
}
function disp_mpcn(lang) {
    document.getElementById('box_content').innerHTML='<div id="box_header"><h2 id="inner_box_title"><span id="box_logo"></span> | <span id="box_title"></span></h2></div><div id="box_description"></div><table id="box_footer" style="width:100%"><tr><th>&lt;</th><th id="box_footer_left_icon"></th><th>|</th><th><a id="box_footer_source" href="#">source</a></th><th>|</th><th id="box_footer_right_icon"></th><th>&gt;</th></tr></table>';
    document.getElementById('box_logo').innerHTML = "<img width='25px' height='25px' src='img/mpcn.png' />";
    document.getElementById('box_title').innerHTML = 'my_print_combn.c';
    document.getElementById('box_footer_right_icon').innerHTML = '<img onclick="disp_p4p1(\''+lang+'\');" src="img/peachx2.png"/>';
    document.getElementById('box_footer_source').href = 'https://gist.github.com/p4p1/25b5745f8243daa932336c9c5963b3b6';
    document.getElementById('box_footer_left_icon').innerHTML = '<img onclick="disp_kb(\''+lang+'\');" src="img/flopx2.png" />';
    if (lang == "English") {
        document.getElementById('box_description').innerHTML = "<p>This is possibly the hardest programming exercise that I ever did! It took me around 4-6 months to figure it out. I recommend to anyone who is interested in doing it before reading this.</p><h4>The rules</h4><p>You have to write a function that displays in ascending order all of the numbers composed by n different digits (the integer n is given as parameter). With n digit, only the smallest number composed by those digits. You can not use arrays, nor standard library functions. The only allowed function that is allowed is putchar() and the function has to be prototyped as follows:</p><pre><code class='c'>int	my_print_combn(int n);</code></pre><p>As an example, my_print_combn(3) will output:</p><pre><code class='bash'>012, 013, 014, 015, 016, 017, 018, 019, 023, ..., 789</code></pre><h4>How I solved it:</h4><p>As I said this exercise took me a long time to solve. Usually, I figure it out after a few tries but this one turned my head around for MONTHS! So back 6 months ago, I first looked at this exercise from the standpoint of using an array but because it was not allowed, I tried with a lot of temporary variables to store data so that It can be checked and re-used but after a certain point I could not do it without using anything that was dynamically allocated. After a bit of research, I found <u><a href='http://ideone.com/KeC9i4' >this code</a></u>. I played around with it for a few weeks but because he was cheating with arrays, I lost hope. After a break of 4months, I came back on the exercise, ready to finish it. I started totally from scratch to see if I could figure out something. Instead of telling myself how would a computer do it, I thought how would I manually do it. So from there I thought, I would go from 0 to 10^n and check the digits in a way to print out the correct numbers. So that is when the solution finally hit me! I just had to use digits first and the at the moment to print them, I would add up the value to transform an int to a character. With the help of my ASCII table, I wrote the part that displays any number digit by digit. But I had a problem, I didn't know how to go through a number digit by digit in C. So I opened up a new terminal and I ran cpython. Because of the similarities of Python and C, I wrote this function:</p><pre><code class='python hljs'>def get_digit(number, digit):\n\ti=0\n\tpower=1\n\twhile (i&lt;number):\n\t\tpower*=10\n\t\ti+=1\n\treturn number/power % 10</code></pre><p>This function that I later rewrote in C, allows me to get any digit from a number, like an array. But I have to watch out, the indexing is reversed. After all of this research I was ready to write the function that display's the provided number:</p><img src='img/mpcn_putchar.png' /><p>I chose not to highlight much of the code because the padding and the detection of the last number are not very relevant. So, in orange, I have the variable initialization with I (i is for increment) is set to the length of the number-1, if you provide the length to get_digit() it will return 0, and it is not what I want. the get_digit function will return the demanded number, we add 48 to convert to a character and 'Voilas!' it works!. Now I have to finish with a function that checks if the number can be printed or not. Because of the get_digit() function, I can go through a number and check if each digit is smaller than the other. My approach was to do a function that cycles through the number and check if the digit before is smaller than the current digit:</p><img src='img/my_print_combn_proc_no.png' /><p>In the code above you can see the loop that allows me to go through the number. Then in blue the condition will check if the last number is smaller than the current one. If it is it will add 1 to the counter. After this, we check the counter (in green) and if the counter is equal to the length of the number then the number has all of his digits smaller than the other, So it can be printed to the screen.</p>";
    } else {
        document.getElementById('box_description').innerHTML = "";
    }
}

function disp_larp(lang) {

    document.getElementById('box_content').innerHTML='<div id="box_header"><h2 id="inner_box_title"><span id="box_logo"></span> | <span id="box_title"></span></h2></div><div id="box_description"></div><table id="box_footer" style="width:100%"><tr><th>&lt;</th><th id="box_footer_left_icon"></th><th>|</th><th><a id="box_footer_source" href="#">source</a></th><th>|</th><th id="box_footer_right_icon"></th><th>&gt;</th></tr></table>';

    document.getElementById('box_logo').innerHTML = '<img src="https://p4p1.github.io/img/lemonx2.png" />';
    document.getElementById('box_title').innerHTML = 'larp';
    document.getElementById('box_description').innerHTML = '<p>larp, or leo arp is a tool to arp spoof you\'re entire network. I made this for educational purposes  so please do not use this for illegal activites. larp has different sniffers implemented to get data from the current network. you can also add you\'re own sniffers.</p><img src=""width="40%" height="40%" /><iframe width="40%" height="40%" src="" frameborder="0" allowfullscreen></iframe>';
    document.getElementById('box_footer_left_icon').innerHTML = '<img onclick="disp_p4p1(\''+lang+'\');" src="https://p4p1.github.io/img/peachx2.png"/>';
    document.getElementById('box_footer_source').href = 'https://github.com/p4p1/larp/';
    document.getElementById('box_footer_right_icon').innerHTML = '<img onclick="disp_kb(\''+lang+'\');" src="https://p4p1.github.io/img/flopx2.png" />';

}

function disp_kb(lang) {

    document.getElementById('box_content').innerHTML='<div id="box_header"><h2 id="inner_box_title"><span id="box_logo"></span> | <span id="box_title"></span></h2></div><div id="box_description"></div><table id="box_footer" style="width:100%"><tr><th>&lt;</th><th id="box_footer_left_icon"></th><th>|</th><th><a id="box_footer_source" href="#">source</a></th><th>|</th><th id="box_footer_right_icon"></th><th>&gt;</th></tr></table>';

    document.getElementById('box_logo').innerHTML = '<img src="https://p4p1.github.io/img/flopx2.png" />';
    document.getElementById('box_title').innerHTML = 'kb_arduino_lib';
    document.getElementById('box_description').innerHTML = '<p>kb_arduino_lib, is a library for arduino. This library allows you to turn you\'re arduino into a keyboard.</p><img src=""width="40%" height="40%" /><iframe width="40%" height="40%" src="https://www.youtube.com/embed/6aWnanQLB-s" frameborder="0" allowfullscreen></iframe>';
    document.getElementById('box_footer_left_icon').innerHTML = '<img onclick="disp_larp(\''+lang+'\');" src="https://p4p1.github.io/img/lemonx2.png"/>';
    document.getElementById('box_footer_source').href = 'https://github.com/p4p1/kb_arduino_lib/';
    document.getElementById('box_footer_right_icon').innerHTML = '<img onclick="disp_mpcn(\''+lang+'\');" with="25px" height="25px" src="img/mpcn.png" />';

}
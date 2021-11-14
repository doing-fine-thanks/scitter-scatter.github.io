import itertools

walks = []

class node(object):
    def __init__(self,connections):
        self.children = connections

def walk_graph(node,walk_thus_far):
    walks.append(walk_thus_far)
    if node.children != []:
        for child in node.children:
            walk_graph(nodes[child],walk_thus_far+[child])
        
            
food = node(["eval1","eval5","eval4","seq","goodbye","busride"])
eval1 = node(["seq"])
eval2 = node(["code"])
eval3 = node(["death"])
eval4 = node(["busride"])
eval5 = node(["goodbye"])
busride = node(["seq"])
seq = node(["sound","cSharp","goodbye"])
goodbye = node(["cSharp","code","gparents"])
cSharp = node(["eval2","code","sound","color"])
gparents = node(["eval3","death"])
death = node(["phil"])
phil = node([])
code = node(["joy"])
color = node(["dreams"])
joy = node(["sound"])
sound = node([])
dreams = node(["gender","moreDreams"])
gender = node(["moreDreams"])
moreDreams = node([])


nodes = {"food":food,
         "eval1":eval1,
         "eval2":eval2,
         "eval3":eval3,
         "eval4":eval4,
         "eval5":eval5,
         "busride":busride,
         "seq":seq,
         "goodbye":goodbye,
         "cSharp":cSharp,
         "gparents":gparents,
         "death":death,
         "phil":phil,
         "code":code,
         "color":color,
         "joy":joy,
         "sound":sound,
         "dreams":dreams,
         "gender":gender,
         "moreDreams":moreDreams}

walk_graph(food,["food"])
print("# of node walks = "+str(len(walks)))

terms = {"food":162,
         "busride":54,
         "seq":144,
         "cSharp":512,
         "gparents":4320,
         "code":896,
         "sound":27648,
         "moreDreams":864}



def count():
    tota 
    i = 1
    nodenames = list(terms.keys())
    for walk in walks:
        walk_states = 1
        for name in nodenames:
            if name in walk:
                walk_states *= terms[name]
        total_states += walk_states
        i += 1
    return total_states

a = count()
print("TOTAL # OF STATES = "+str(a))
        

import random

RPS_AI = None
RPS_PL = None

def text_prompt(msg): # basic text prompt code from initial Blockly project
  try:
    return input(msg)
  except NameError:
    return input(msg)


RPS_AI = random.randint(1, 3) 
RPS_PL = text_prompt('Rock, Paper, or Scissors? ')
if RPS_PL == 'rock': # converts user input to numbers for calculations of w/l
  RPS_PL = 1
elif RPS_PL == 'paper':
  RPS_PL = 2
elif RPS_PL == 'scissors':
  RPS_PL = 3
if RPS_PL - 1 == RPS_AI: # calcuates winning and losing using the numbers from RPS_AI and RPS_PL
  print('You Win!')
elif RPS_PL + 2 == RPS_AI:
  print('You Win!')
elif RPS_AI == RPS_PL:
  print('Tie!')
else:
  print('You Lose!')
if RPS_AI == 1: # shows the ai and player choices
  print('AI : ' + 'Rock')
elif RPS_AI == 2:
  print('AI : ' + 'Paper')
elif RPS_AI == 3:
  print('AI : ' + 'Scissors')
if RPS_PL == 1:
  print('You : ' + 'Rock')
elif RPS_PL == 2:
  print('You : ' + 'Paper')
elif RPS_PL == 3:
  print('You : ' + 'Scissors')
import pyperclip

final_string = ""

for index in range(1, 21):
    final_string += """
.margin-%d                      { margin: calc(%d*var(--grid));           }
.margin-left-%d                 { margin-left: calc(%d*var(--grid));      }
.margin-right-%d                { margin-right: calc(%d*var(--grid));     }
.margin-bottom-%d               { margin-bottom: calc(%d*var(--grid));    }
.margin-top-%d                  { margin-top: calc(%d*var(--grid));       }
.margin-vertical-%d             { margin: calc(%d*var(--grid)) initial;   }
.margin-sides-%d                { margin: initial calc(%d*var(--grid));   }
                              """ % (index, index*5, index, index*5, index, index*5, index, index*5, index, index*5, index, index*5, index, index*5)

pyperclip.copy(final_string)

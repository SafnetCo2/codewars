def solve(s):
    from collections import Counter
        # Edge case: If all characters in the string are the same or if the string has only one character
    char_set =set(s)
    if(len(char_set)==len(s)or len(char_set)==1):
        return True
    # Count the frequency of each character
    freq=Counter(s)
    freq_values=list(freq.values())
    freq_count=Counter(freq_values)
        # If there is only one frequency count, return False since we can't remove exactly one character
    if len(freq_count)==1:
        return False
    # If there are exactly two frequency counts, check the conditions
    
    if len(freq_count)==2:
        key1,key2=freq.count.keys()
        val1,val2=freq_count.values()
            
        # Condition where one character appears exactly once
        if(key1==key2+1 and val1==1)or (key2==key1 and val2==1):
            return True 
    return False   
    
print(solve('aaaa'))
print(solve('aaaa'))
print(solve('wwwf'))



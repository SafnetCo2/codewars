def solve(s):
    freq_map = {}

    # Populate the frequency of each character
    for char in s:
        freq_map[char] = freq_map.get(char, 0) + 1


    max_freq_value = float('-inf')
    min_freq_value = float('inf')
    max_freq_counter = 0
    for key in freq_map:
        if freq_map[key] == max_freq_value:
            max_freq_counter += 1

        if freq_map[key] > max_freq_value:
            max_freq_value = freq_map[key]
            max_freq_counter = 1

        if freq_map[key] < min_freq_value:
            min_freq_value = freq_map[key]

    # Check if the given constraints of the problem are satisfied
    if (max_freq_value - min_freq_value) == 0:
        return True
    elif (max_freq_value - min_freq_value) == 1:
        if max_freq_counter == 1:
            return True
        else:
            return False
    else:
        return False

# Main function
def main():
    # Corner-case input when there exist multiple occurrences of maxFrequency characters
    str = "xxxyyyzzaa"
    if solve(str):
        print("YES")
    else:
        print("NO")

# Execute main function
if __name__ == "__main__":
    main()

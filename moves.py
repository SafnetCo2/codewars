def diag_2_sym(strng):
    lines = strng.split('\n')
    n = len(lines)
    transformed = [''] * n
    for i in range(n):
        for j in range(n):
            transformed[j] = lines[i][n - 1 - j] + transformed[j]
    return '\n'.join(transformed)

def rot_90_counter(strng):
    lines = strng.split('\n')
    n = len(lines)
    transformed = [''] * n
    for i in range(n):
        for j in range(n):
            transformed[n - 1 - j] += lines[i][j]
    return '\n'.join(transformed)

def selfie_diag2_counterclock(strng):
    diag2 = diag_2_sym(strng).split('\n')
    rot90 = rot_90_counter(strng).split('\n')
    original = strng.split('\n')
    return '\n'.join(o + '|' + d + '|' + r for o, d, r in zip(original, diag2, rot90))

def oper(fct, s):
    return fct(s)

# Test cases
s = "abcd\nefgh\nijkl\nmnop"

# Expected output for diag_2_sym
print(diag_2_sym(s))
# Expected output:
# plhd
# okgc
# njfb
# miea

# Expected output for rot_90_counter
print(rot_90_counter(s))
# Expected output:
# dhlp
# cgko
# bfjn
# aeim

# Expected output for selfie_diag2_counterclock
print(selfie_diag2_counterclock(s))
# Expected output:
# abcd|plhd|dhlp
# efgh|okgc|cgko
# ijkl|njfb|bfjn
# mnop|miea|aeim

# Example usage of oper
print(oper(diag_2_sym, s))
# Expected output (same as diag_2_sym):
# plhd
# okgc
# njfb
# miea
def diag_2_sym(strng):
    return rot_90_counter(strng[::-1])
def rot_90_counter(strng):
    return [''.join(char) for char in zip(*strng)][::-1]
def selfie_diag2_counterclock(strng):
    return ['|'.join(line) for line in zip(strng, diag_2_sym(strng), rot_90_counter(strng))]
def oper(fct, s):
    return '\n'.join(fct(s.split('\n')))
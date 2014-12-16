/**
 * Seven months ago, I thought I had found a previously
 * unknown integer sequence. But I learned today that
 * Pythagoras found it first. It's called the triangular
 * number sequence. I demonstrate another algorithm for
 * generating the sequence in python. This one is C++
 * and far more robust. It beats all constraints in the
 * python algorithm.
 */

#include <iostream>

int triangular_number(int);

int main() {
	for (int i = 1; i <= 100; i++) {
		std::cout << i << ":\t" << triangular_number(i) << std::endl;
	}
}

int triangular_number(int base) {
	int total = 0;
	
	for (int i = base; i >= 1; i--) {
		total += base - i;
	}
	
	return total;
}

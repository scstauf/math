/**
 *	Expression Evaluator by scstauf
 *
 *	This small program parses and evaluates "complex" mathematical expressions.
 *
 *	(1 + 2 * (3 + 4) / 5) => 4.2
 *
 *	NOTE:
 *			This algorithm does NOT check for division by zero
 *			because I wrote it in approximately two hours and I have 
 *			to work in the morning.
 *
 *	scottyeatscode.net
 *	github.com/scstauf
 *	twitter.com/scstauf
 */

#include <iostream>
#include <sstream>
#include <vector>
#include <cstdio>
using namespace std;

double		parse(string);
double		solve(vector<string>);
string		dtos(double);
double		stod(string);
bool		is_numeric(string);

bool		contains_open_parenthesis(string);
string&		replace(string&, string, string);

string		get_innermost(string);
double		handle_segments(string);

int main() {
	string input("");
	
	cout << "expression: ";
	getline(cin, input, '\n');
	
	cout << "value: " << handle_segments(input) << endl;
}

double parse(string input) {
	vector<string> segments;
	string segment("");
	char c = '\0';
	int open = 0, closed = 0;
	double result = 0;
	for (unsigned int i = 0; i < input.length(); i++) {
		c = input[i];
		switch (c) {
			case ' ': case '\t': /* ignore whitespace */ break;
			
			case '(':
				open++;
				break;
			case ')':
				closed++;
				
				if (open == closed) {
					segments.push_back(segment);
					segment.clear();
					result += solve(segments);
					segments.clear();
				}
				
				break;
			
			case '+': case '-': case '*': case '/':
				segments.push_back(segment);
				segment.clear();
				segment.push_back(c);
				segments.push_back(segment);
				segment.clear();
				break;
				
			default:
				segment.push_back(c);
				break;
		}
	}
	return result;
}

double solve(vector<string> stack) {
	double result = 0;
	char operation = '\0';
	
	for (unsigned int i = 0; i < stack.size(); i++) {
		if (i == 0 && is_numeric(stack[i])) {
			result = stod(stack[i]);
			continue;
		}
		
		if (stack[i].compare("+") == 0 || 
			stack[i].compare("-") == 0 || 
			stack[i].compare("*") == 0 || 
			stack[i].compare("/") == 0) {
			operation = stack[i][0];
		}
		else {
			switch (operation) {
				case '+':
					result += stod(stack[i]);
					break;
				case '-':
					result -= stod(stack[i]);
					break;
				case '*':
					result *= stod(stack[i]);
					break;
				case '/':
					result /= stod(stack[i]);
					break;
			}
		}
	}
	return result;
}

double stod(string s) {
	stringstream ss(s);
	double d;
	ss >> d;
	return d;
}

string dtos(double d) {
	stringstream ss;
	ss << d;
	return ss.str();
}

bool is_numeric(string s) {
	bool numeric = true;
	int decimals = 0;
	for (unsigned int i = 0; i < s.length(); i++) {
		if (!isdigit(s[i])) {
			if (s[i] == '.' && decimals < 1) {
				decimals++;
				continue;
			}
			else if (s[i] == '-') {
				if (i != 0) {
					numeric = false;
					break;
				}
				else {
					continue;
				}
			}
			numeric = false;
			break;
		}
	}
	
	return numeric;
}

string &replace(string &subj, string old, string repl) {
	size_t pos = subj.find(old);
	if (pos != string::npos) {
		subj.erase(pos, old.size());
		subj.insert(pos, repl);
	}
	return subj;
}

bool contains_open_parenthesis(string initial) {
	bool found = false;
	for (unsigned int i = 0; i < initial.length(); i++) {
		if (initial[i] == '(') {
			found = true;
			break;
		}
	}
	return found;
}

string get_innermost(string input) {
	string innermost("");
	int last_open = 0, count = 0;
	bool quit = false;
	char c = '\0';
	
	for (unsigned int i = 0; i < input.length(); i++) {
		c = input[i];
		
		switch (c) {
			case '(':
				last_open = i;
				count = 0;
				break;
			case ')':
				innermost = input.substr(last_open, count + 2);
				quit = true;
				break;
			default:
				count++;
				break;
		}
		
		if (quit) {
			break;
		}
	}
	
	return innermost;
}

double handle_segments(string input) {
	string tmp(input);
	string segment("");
	double result = 0;
	int len = 0;
	while (contains_open_parenthesis(tmp)) {
		segment = get_innermost(tmp);
		result = parse(segment);
		tmp = replace(tmp, segment, dtos(result));
		len = (tmp.length() - 1) + segment.length();
		tmp.append(input.substr(len, input.length() - len));
	}
	return result;
}



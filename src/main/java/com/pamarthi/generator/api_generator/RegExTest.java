package com.pamarthi.generator.api_generator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegExTest {

	public static void main(String[] args) {

		Pattern pattern = Pattern.compile("geeks");
		 
        Matcher m = pattern.matcher("geeksforgeeks.org");
 
        System.out.println(m.matches());
        while (m.find())
            System.out.println("Pattern found from " + m.start() +
                               " to " + (m.end()-1));
	}

}

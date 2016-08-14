var context = require.context('./__test__', true, /-test\.js$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);
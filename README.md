multi-liner
=======================
I made this script because in my day job I find myself converting a lot of SQL queries into multi-line javascript strings for use in Node.JS projects.

After wrapping enough queries in quotation marks it tends to get tiring and thus productivity helpers are born.

You can try it for yourself at: 
http://www.valkrysa.com/experiments/multi-line-string-generator/

Read more about this and other projects and topics at: http://www.valkrysa.com/tech/2015/1/30/tools-javascript-multi-line-string-builder-and-other-things-too

### Usage

Initialize the helper.
```var theMultiLiner = new MultiLiner();```

Set multiline string you'd like to wrap. (also works with non-multiline strings but I don't see the point.
```theMultiLiner.setStringToWrap(" Select \n * \n From \n example \n WHERE \n date = '2014-01-10' ");```

Set what you would like to wrap the string with.
```theMultiLiner.setLineStart(" + \" ");
theMultiLiner.setLineEnd(" \" ");```

Get your result.
```myResult = theMultiLiner.wrapString();```

Now while you could use this programatically in each of your scripts I've found the most useful way to use it is to host it on my site and just paste the string that needs to be wrapped and hit a button.

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Array::2D Array - DS Hourglass</title>
  </head>
  <body>
    <script>
      function testString(str){
        stack = [];
        for(var i=0;i < str.length();i++){
            if(str[i] == '(' || str[i] == '{' || str[i] == '['){
                stack.push(str[i]);
            }else{
                var top = stack.top();
                if(str[i] == ')' && top == '(' || 
                    str[i] == '}' && top == '{' ||
                    str[i] == ']' && top == '[') {
                    stack.pop();
                }else{
                    return false;
                }
            }
        }
        return stack.length() ? false : true;
    }
    console.log(testString('()[]{}}') ? 'valid': 'invalid');
    </script>
  </body>
</html>

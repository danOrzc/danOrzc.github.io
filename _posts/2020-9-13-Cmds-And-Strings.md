---
layout: post
title: Python, maya.cmds and strings.
author: Daniel Orozco
comments: true
tags: [python, maya.cmds]
---

### I've got strings on me.

When starting to learn how to use Python scripting language inside Maya with `maya.cmds` module, I started to notices something really curious: Everything (or at least the vast majority) is a string. A cube, a vertex, a button and even a shader gets represented as a string in this system. A string in programming, is defined as a list or array of characters. But why do I say that everything in Maya is recognized as basically "words"?

<!--more-->

Let's imagine that you want to create a cube using python.


```python
# Import cmds module
from maya import cmds

# Create the cube
cmds.polyCube()
```

After executing that code, you get a nice little cubey in the scene. But that is not really helpful is it? There is already a button on the shelf that does exactly that! Well, but what if you wanted to create the cube **AND** move it in the space. Normally, you would have to create the cube, click it, and move it either with the Move Tool or by writing the numbers on the Attribute Editor / Channel Editor. But, we are not going to do that, let's be ~~lazy~~ efficient!

```python
from maya import cmds

# Now we assign a name to identify our cube
# name is a flag that polyCube() recognizes. This way, we can send other instructions.
# The complete flag list can be found in Maya's documentation.
cmds.polyCube(name="MyCube")

# Move MyCube 5 units in each axis
cmds.move(5, 5, 5, "MyCube")
```

As you may have noticed, now we are using the **string** name to
1. Assign a name to our cube that is shown in the outliner.
2. Use that name to identify our cube in `cmds.move()`

Now we have a tool that creates a cube anywhere we want... right? Well... If you run the code again you'll notice that the code is indeed creating new cubes, but only the first one is moving, WHY? Some stuff is happening here:
1. `cmds.move()` by default moves the desired object relatively to its actual position, so it is adding 5 units each time you run the code.
2. When creating each new cube, Maya notices that "MyCube" already exists, so the new cubes are named "MyCube2", "MyCube3" and so on...
3. `cmds.move()` is moving "MyCube" that means, the first that we created. So it is completely ignoring the new ones.

One way to solve this would be to change the name flag before running the code again. But remember that we want to be *efficient* It would be really nice to know the name that Maya automatically assigns to our newly created cubes, no matter if it is the second, the third, the hundreth... Fortunately for us, there is! Must of Maya's commands return data when you execute them. Would you like to guess which data type they return?

- A) float
- B) int
- C) **･✧* :ﾟ･✧ *string* ✧･ﾟ: *✧･**

```python
from maya import cmds

# Save the string returned by cmds.polyCube() in a variable
cube_varible = cmds.polyCube(name="OurCube")

# Use said variable in cmds.move()
cmds.move(2, 2, 2, cube_variable)

# Out of curiosity, let's print the value of our variable
print cube_variable
```

After executing this code, we get a beautiful new cube placed in the coordinate (2, 2, 2). Also, if we take a look to the output, we can see the value that `cube_variable` had: `["OurCube", "OurCube_shape"]`

But Daniel, what is that? You said it was going to be a string... Well, some commands return **more than one** string, so it returns a list of string. In the case of `polyCube()` it returns a list of strings where the first index (index 0) is the name of the cube's *transfrom node* and the second one (index 1) is the name of the *shape node* of the cube (I'll talk about this in other post). You can try to add the following lines to the previous code and see the result:

```python
# Print only the name of the transform node
print cube_variable[0]
# Print only the name of the shape node
print cube_variable[1]
```

And that's it! This is pretty much how `maya.cmds` recognizes the objects in the scene. Things get a little bit more complex when you start playing with the hierarchy, but at the end of the day, Maya also uses strings for that. To finalize, I would like to recommend you to play around with the functions, **read the documentation** and, something that really helped me, was to print the result of the functions I was working with and see what they were returning! (you can find this info on the documentation, but sometimes you just have to test to what they really mean haha)

This is a list of some functions and their returns:
```python
from maya import cmds

# Returns a list containing [the name of the transform node, the name of the shape node]
cmds.polySphere()
# Returns the newly assigned name
cmds.rename()
# Returns the name of the created window
cmds.window()
# Returns the name of the created node
cmds.createNode()
```

{: .center-div}
![An image of pinocchio's animated film.]({{ site.baseurl }}/images/posts/Pinocchio-Strings.jpg)

{: .center-div}
*Pinocchio (and Ultron) does not approve this post.*
Ninja to Cat

Create a jQuery puzzle using two images sliced into five parts. Using jQuery, make it so that when each image slice is clicked, it will change to a different picture. You may use your own pictures and crop them or you can just download the images provided here.


Helpful Tip (Adding Custom Attribute to Any HTML Tag):
When you do this assignment, there is a little trick used by a lot of developers that could also be helpful. Remember that we kept emphasizing that HTML should contain the information, CSS the looks and JS the behavior. With this light, when you look at this assignment, where should the information about the alternative image be stored? You could argue that it should be in the HTML or it should be in the JS. Most experienced developers would argue that this should be in the HTML. Now, when you have an HTML tag, it has some well-known attributes that have meanings for the browser. For example for "<img src="cat.png" />" we are using an img HTML tag with an attribute called 'src'. Now, we can also add whatever attributes we want in any HTML. For example, consider this:

<img src='ninja1.png' data-alt-src='cat1.png' />
We created our own unique data-alt-src attribute with the value of 'cat1.png'. The browser would not understand what that attribute means so it won't do anything but in your JavaScript code you could access these values by doing something like below:

$('img').click(function() {
  console.log('data-alt-src value is', $(this).attr('data-alt-src'));
});
Creating custom attributes and storing helpful information in these are common practices among experienced developers. We want you to learn this and apply this principle when doing this assignment.

Good luck
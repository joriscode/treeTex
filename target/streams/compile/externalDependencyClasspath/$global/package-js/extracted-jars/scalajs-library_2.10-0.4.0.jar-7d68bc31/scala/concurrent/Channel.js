/** @constructor */
ScalaJS.c.scala_concurrent_Channel = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.written$1 = null;
  this.lastWritten$1 = null;
  this.nreaders$1 = 0
});
ScalaJS.c.scala_concurrent_Channel.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_Channel.prototype.constructor = ScalaJS.c.scala_concurrent_Channel;
ScalaJS.c.scala_concurrent_Channel.prototype.written__p1__Lscala_concurrent_Channel$LinkedList = (function() {
  return this.written$1
});
ScalaJS.c.scala_concurrent_Channel.prototype.written$und$eq__p1__Lscala_concurrent_Channel$LinkedList__V = (function(x$1) {
  this.written$1 = x$1
});
ScalaJS.c.scala_concurrent_Channel.prototype.lastWritten__p1__Lscala_concurrent_Channel$LinkedList = (function() {
  return this.lastWritten$1
});
ScalaJS.c.scala_concurrent_Channel.prototype.lastWritten$und$eq__p1__Lscala_concurrent_Channel$LinkedList__V = (function(x$1) {
  this.lastWritten$1 = x$1
});
ScalaJS.c.scala_concurrent_Channel.prototype.nreaders__p1__I = (function() {
  return this.nreaders$1
});
ScalaJS.c.scala_concurrent_Channel.prototype.nreaders$und$eq__p1__I__V = (function(x$1) {
  this.nreaders$1 = x$1
});
ScalaJS.c.scala_concurrent_Channel.prototype.write__O__V = (function(x) {
  this.lastWritten__p1__Lscala_concurrent_Channel$LinkedList().elem$und$eq__O__V(x);
  this.lastWritten__p1__Lscala_concurrent_Channel$LinkedList().next$und$eq__Lscala_concurrent_Channel$LinkedList__V(new ScalaJS.c.scala_concurrent_Channel$LinkedList().init___Lscala_concurrent_Channel(this));
  this.lastWritten$und$eq__p1__Lscala_concurrent_Channel$LinkedList__V(this.lastWritten__p1__Lscala_concurrent_Channel$LinkedList().next__Lscala_concurrent_Channel$LinkedList());
  if ((this.nreaders__p1__I() > 0)) {
    ScalaJS.objectNotify(this)
  }
});
ScalaJS.c.scala_concurrent_Channel.prototype.read__O = (function() {
  while (ScalaJS.anyRefEqEq(this.written__p1__Lscala_concurrent_Channel$LinkedList().next__Lscala_concurrent_Channel$LinkedList(), null)) {
    try {
      this.nreaders$und$eq__p1__I__V((this.nreaders__p1__I() + 1));
      this.wait__V()
    } finally {
      this.nreaders$und$eq__p1__I__V((this.nreaders__p1__I() - 1))
    }
  };
  var x = this.written__p1__Lscala_concurrent_Channel$LinkedList().elem__O();
  this.written$und$eq__p1__Lscala_concurrent_Channel$LinkedList__V(this.written__p1__Lscala_concurrent_Channel$LinkedList().next__Lscala_concurrent_Channel$LinkedList());
  return x
});
ScalaJS.c.scala_concurrent_Channel.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.written$1 = new ScalaJS.c.scala_concurrent_Channel$LinkedList().init___Lscala_concurrent_Channel(this);
  this.lastWritten$1 = this.written__p1__Lscala_concurrent_Channel$LinkedList();
  this.nreaders$1 = 0;
  return this
});
ScalaJS.c.scala_concurrent_Channel.prototype.read__ = (function() {
  return this.read__O()
});
ScalaJS.c.scala_concurrent_Channel.prototype.write__O__ = (function(x) {
  return ScalaJS.bV(this.write__O__V(x))
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_Channel = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_Channel.prototype = ScalaJS.c.scala_concurrent_Channel.prototype;
ScalaJS.is.scala_concurrent_Channel = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Channel)))
});
ScalaJS.as.scala_concurrent_Channel = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Channel(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Channel")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Channel = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Channel)))
});
ScalaJS.asArrayOf.scala_concurrent_Channel = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Channel(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Channel;", depth)
  }
});
ScalaJS.data.scala_concurrent_Channel = new ScalaJS.ClassTypeData({
  scala_concurrent_Channel: 0
}, false, "scala.concurrent.Channel", ScalaJS.data.java_lang_Object, {
  scala_concurrent_Channel: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_Channel.prototype.$classData = ScalaJS.data.scala_concurrent_Channel;
//@ sourceMappingURL=Channel.js.map

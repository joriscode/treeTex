/** @constructor */
ScalaJS.c.scala_concurrent_Channel$LinkedList = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.elem$1 = null;
  this.next$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_concurrent_Channel$LinkedList.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_Channel$LinkedList.prototype.constructor = ScalaJS.c.scala_concurrent_Channel$LinkedList;
ScalaJS.c.scala_concurrent_Channel$LinkedList.prototype.elem__O = (function() {
  return this.elem$1
});
ScalaJS.c.scala_concurrent_Channel$LinkedList.prototype.elem$und$eq__O__V = (function(x$1) {
  this.elem$1 = x$1
});
ScalaJS.c.scala_concurrent_Channel$LinkedList.prototype.next__Lscala_concurrent_Channel$LinkedList = (function() {
  return this.next$1
});
ScalaJS.c.scala_concurrent_Channel$LinkedList.prototype.next$und$eq__Lscala_concurrent_Channel$LinkedList__V = (function(x$1) {
  this.next$1 = x$1
});
ScalaJS.c.scala_concurrent_Channel$LinkedList.prototype.scala$concurrent$Channel$LinkedList$$$outer__Lscala_concurrent_Channel = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_concurrent_Channel$LinkedList.prototype.init___Lscala_concurrent_Channel = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.next$1 = null;
  return this
});
ScalaJS.c.scala_concurrent_Channel$LinkedList.prototype.scala$concurrent$Channel$LinkedList$$$outer__ = (function() {
  return this.scala$concurrent$Channel$LinkedList$$$outer__Lscala_concurrent_Channel()
});
ScalaJS.c.scala_concurrent_Channel$LinkedList.prototype.next$und$eq__Lscala_concurrent_Channel$LinkedList__ = (function(x$1) {
  return ScalaJS.bV(this.next$und$eq__Lscala_concurrent_Channel$LinkedList__V(x$1))
});
ScalaJS.c.scala_concurrent_Channel$LinkedList.prototype.next__ = (function() {
  return this.next__Lscala_concurrent_Channel$LinkedList()
});
ScalaJS.c.scala_concurrent_Channel$LinkedList.prototype.elem$und$eq__O__ = (function(x$1$2) {
  return ScalaJS.bV(this.elem$und$eq__O__V(x$1$2))
});
ScalaJS.c.scala_concurrent_Channel$LinkedList.prototype.elem__ = (function() {
  return this.elem__O()
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_Channel$LinkedList = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_Channel$LinkedList.prototype = ScalaJS.c.scala_concurrent_Channel$LinkedList.prototype;
ScalaJS.is.scala_concurrent_Channel$LinkedList = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Channel$LinkedList)))
});
ScalaJS.as.scala_concurrent_Channel$LinkedList = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Channel$LinkedList(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Channel$LinkedList")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Channel$LinkedList = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Channel$LinkedList)))
});
ScalaJS.asArrayOf.scala_concurrent_Channel$LinkedList = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Channel$LinkedList(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Channel$LinkedList;", depth)
  }
});
ScalaJS.data.scala_concurrent_Channel$LinkedList = new ScalaJS.ClassTypeData({
  scala_concurrent_Channel$LinkedList: 0
}, false, "scala.concurrent.Channel$LinkedList", ScalaJS.data.java_lang_Object, {
  scala_concurrent_Channel$LinkedList: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_Channel$LinkedList.prototype.$classData = ScalaJS.data.scala_concurrent_Channel$LinkedList;
//@ sourceMappingURL=Channel$LinkedList.js.map

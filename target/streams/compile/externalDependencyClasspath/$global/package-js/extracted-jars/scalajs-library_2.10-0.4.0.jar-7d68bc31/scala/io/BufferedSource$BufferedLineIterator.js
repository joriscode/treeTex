/** @constructor */
ScalaJS.c.scala_io_BufferedSource$BufferedLineIterator = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.lineReader$2 = null;
  this.nextLine$2 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_io_BufferedSource$BufferedLineIterator.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_io_BufferedSource$BufferedLineIterator.prototype.constructor = ScalaJS.c.scala_io_BufferedSource$BufferedLineIterator;
ScalaJS.c.scala_io_BufferedSource$BufferedLineIterator.prototype.lineReader__p2__Ljava_io_BufferedReader = (function() {
  return this.lineReader$2
});
ScalaJS.c.scala_io_BufferedSource$BufferedLineIterator.prototype.nextLine__T = (function() {
  return this.nextLine$2
});
ScalaJS.c.scala_io_BufferedSource$BufferedLineIterator.prototype.nextLine$und$eq__T__V = (function(x$1) {
  this.nextLine$2 = x$1
});
ScalaJS.c.scala_io_BufferedSource$BufferedLineIterator.prototype.hasNext__Z = (function() {
  if (ScalaJS.anyRefEqEq(this.nextLine__T(), null)) {
    this.nextLine$und$eq__T__V(this.lineReader__p2__Ljava_io_BufferedReader().readLine__T())
  };
  return (!ScalaJS.anyRefEqEq(this.nextLine__T(), null))
});
ScalaJS.c.scala_io_BufferedSource$BufferedLineIterator.prototype.next__T = (function() {
  if (ScalaJS.anyRefEqEq(this.nextLine__T(), null)) {
    var result = this.lineReader__p2__Ljava_io_BufferedReader().readLine__T()
  } else {
    try {
      var result = this.nextLine__T()
    } finally {
      this.nextLine$und$eq__T__V(null)
    }
  };
  if (ScalaJS.anyRefEqEq(result, null)) {
    return ScalaJS.as.java_lang_String(ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O())
  } else {
    return result
  }
});
ScalaJS.c.scala_io_BufferedSource$BufferedLineIterator.prototype.scala$io$BufferedSource$BufferedLineIterator$$$outer__Lscala_io_BufferedSource = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_io_BufferedSource$BufferedLineIterator.prototype.next__O = (function() {
  return this.next__T()
});
ScalaJS.c.scala_io_BufferedSource$BufferedLineIterator.prototype.init___Lscala_io_BufferedSource = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  if (($$outer.scala$io$BufferedSource$$charReaderCreated__Z() && $$outer.iter__Lscala_collection_Iterator().hasNext__Z())) {
    var pb = new ScalaJS.c.java_io_PushbackReader().init___Ljava_io_Reader($$outer.scala$io$BufferedSource$$charReader__Ljava_io_BufferedReader());
    pb.unread__I__V(ScalaJS.uC($$outer.iter__Lscala_collection_Iterator().next__O()));
    var jsx$1 = new ScalaJS.c.java_io_BufferedReader().init___Ljava_io_Reader__I(pb, $$outer.scala$io$BufferedSource$$bufferSize$f)
  } else {
    var jsx$1 = $$outer.scala$io$BufferedSource$$charReader__Ljava_io_BufferedReader()
  };
  this.lineReader$2 = jsx$1;
  this.nextLine$2 = null;
  return this
});
ScalaJS.c.scala_io_BufferedSource$BufferedLineIterator.prototype.scala$io$BufferedSource$BufferedLineIterator$$$outer__ = (function() {
  return this.scala$io$BufferedSource$BufferedLineIterator$$$outer__Lscala_io_BufferedSource()
});
ScalaJS.c.scala_io_BufferedSource$BufferedLineIterator.prototype.nextLine$und$eq__T__ = (function(x$1) {
  return ScalaJS.bV(this.nextLine$und$eq__T__V(x$1))
});
ScalaJS.c.scala_io_BufferedSource$BufferedLineIterator.prototype.nextLine__ = (function() {
  return this.nextLine__T()
});
/** @constructor */
ScalaJS.inheritable.scala_io_BufferedSource$BufferedLineIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BufferedSource$BufferedLineIterator.prototype = ScalaJS.c.scala_io_BufferedSource$BufferedLineIterator.prototype;
ScalaJS.is.scala_io_BufferedSource$BufferedLineIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BufferedSource$BufferedLineIterator)))
});
ScalaJS.as.scala_io_BufferedSource$BufferedLineIterator = (function(obj) {
  if ((ScalaJS.is.scala_io_BufferedSource$BufferedLineIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BufferedSource$BufferedLineIterator")
  }
});
ScalaJS.isArrayOf.scala_io_BufferedSource$BufferedLineIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BufferedSource$BufferedLineIterator)))
});
ScalaJS.asArrayOf.scala_io_BufferedSource$BufferedLineIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BufferedSource$BufferedLineIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BufferedSource$BufferedLineIterator;", depth)
  }
});
ScalaJS.data.scala_io_BufferedSource$BufferedLineIterator = new ScalaJS.ClassTypeData({
  scala_io_BufferedSource$BufferedLineIterator: 0
}, false, "scala.io.BufferedSource$BufferedLineIterator", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_io_BufferedSource$BufferedLineIterator: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BufferedSource$BufferedLineIterator.prototype.$classData = ScalaJS.data.scala_io_BufferedSource$BufferedLineIterator;
//@ sourceMappingURL=BufferedSource$BufferedLineIterator.js.map

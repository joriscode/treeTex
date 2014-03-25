/** @constructor */
ScalaJS.c.scala_collection_immutable_StreamIterator$LazyCell = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.st$1 = null;
  this.v$1 = null;
  this.$$outer$f = null;
  this.bitmap$0$1 = false
});
ScalaJS.c.scala_collection_immutable_StreamIterator$LazyCell.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_StreamIterator$LazyCell.prototype.constructor = ScalaJS.c.scala_collection_immutable_StreamIterator$LazyCell;
ScalaJS.c.scala_collection_immutable_StreamIterator$LazyCell.prototype.v$lzycompute__p1__Lscala_collection_immutable_Stream = (function() {
  if ((!this.bitmap$0$1)) {
    this.v$1 = ScalaJS.as.scala_collection_immutable_Stream(this.st$1.apply__O());
    this.bitmap$0$1 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  this.st$1 = null;
  return this.v$1
});
ScalaJS.c.scala_collection_immutable_StreamIterator$LazyCell.prototype.v__Lscala_collection_immutable_Stream = (function() {
  if ((!this.bitmap$0$1)) {
    return this.v$lzycompute__p1__Lscala_collection_immutable_Stream()
  } else {
    return this.v$1
  }
});
ScalaJS.c.scala_collection_immutable_StreamIterator$LazyCell.prototype.scala$collection$immutable$StreamIterator$LazyCell$$$outer__Lscala_collection_immutable_StreamIterator = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_immutable_StreamIterator$LazyCell.prototype.init___Lscala_collection_immutable_StreamIterator__Lscala_Function0 = (function($$outer, st) {
  this.st$1 = st;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_immutable_StreamIterator$LazyCell.prototype.scala$collection$immutable$StreamIterator$LazyCell$$$outer__ = (function() {
  return this.scala$collection$immutable$StreamIterator$LazyCell$$$outer__Lscala_collection_immutable_StreamIterator()
});
ScalaJS.c.scala_collection_immutable_StreamIterator$LazyCell.prototype.v__ = (function() {
  return this.v__Lscala_collection_immutable_Stream()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_StreamIterator$LazyCell = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_StreamIterator$LazyCell.prototype = ScalaJS.c.scala_collection_immutable_StreamIterator$LazyCell.prototype;
ScalaJS.is.scala_collection_immutable_StreamIterator$LazyCell = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_StreamIterator$LazyCell)))
});
ScalaJS.as.scala_collection_immutable_StreamIterator$LazyCell = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_StreamIterator$LazyCell(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.StreamIterator$LazyCell")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_StreamIterator$LazyCell = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_StreamIterator$LazyCell)))
});
ScalaJS.asArrayOf.scala_collection_immutable_StreamIterator$LazyCell = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_StreamIterator$LazyCell(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.StreamIterator$LazyCell;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_StreamIterator$LazyCell = new ScalaJS.ClassTypeData({
  scala_collection_immutable_StreamIterator$LazyCell: 0
}, false, "scala.collection.immutable.StreamIterator$LazyCell", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_StreamIterator$LazyCell: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_StreamIterator$LazyCell.prototype.$classData = ScalaJS.data.scala_collection_immutable_StreamIterator$LazyCell;
//@ sourceMappingURL=StreamIterator$LazyCell.js.map

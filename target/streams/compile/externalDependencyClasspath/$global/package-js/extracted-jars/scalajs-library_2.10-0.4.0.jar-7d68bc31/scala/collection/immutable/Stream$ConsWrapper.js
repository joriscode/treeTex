/** @constructor */
ScalaJS.c.scala_collection_immutable_Stream$ConsWrapper = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.tl$1 = null
});
ScalaJS.c.scala_collection_immutable_Stream$ConsWrapper.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_Stream$ConsWrapper.prototype.constructor = ScalaJS.c.scala_collection_immutable_Stream$ConsWrapper;
ScalaJS.c.scala_collection_immutable_Stream$ConsWrapper.prototype.$$hash$colon$colon__O__Lscala_collection_immutable_Stream = (function(hd) {
  return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(hd, this.tl$1)
});
ScalaJS.c.scala_collection_immutable_Stream$ConsWrapper.prototype.$$hash$colon$colon$colon__Lscala_collection_immutable_Stream__Lscala_collection_immutable_Stream = (function(prefix) {
  return prefix.append__Lscala_Function0__Lscala_collection_immutable_Stream(this.tl$1)
});
ScalaJS.c.scala_collection_immutable_Stream$ConsWrapper.prototype.init___Lscala_Function0 = (function(tl) {
  this.tl$1 = tl;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_immutable_Stream$ConsWrapper.prototype.$$hash$colon$colon$colon__Lscala_collection_immutable_Stream__ = (function(prefix) {
  return this.$$hash$colon$colon$colon__Lscala_collection_immutable_Stream__Lscala_collection_immutable_Stream(prefix)
});
ScalaJS.c.scala_collection_immutable_Stream$ConsWrapper.prototype.$$hash$colon$colon__O__ = (function(hd) {
  return this.$$hash$colon$colon__O__Lscala_collection_immutable_Stream(hd)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Stream$ConsWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Stream$ConsWrapper.prototype = ScalaJS.c.scala_collection_immutable_Stream$ConsWrapper.prototype;
ScalaJS.is.scala_collection_immutable_Stream$ConsWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Stream$ConsWrapper)))
});
ScalaJS.as.scala_collection_immutable_Stream$ConsWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Stream$ConsWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Stream$ConsWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Stream$ConsWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Stream$ConsWrapper)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Stream$ConsWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Stream$ConsWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Stream$ConsWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Stream$ConsWrapper = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Stream$ConsWrapper: 0
}, false, "scala.collection.immutable.Stream$ConsWrapper", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_Stream$ConsWrapper: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Stream$ConsWrapper.prototype.$classData = ScalaJS.data.scala_collection_immutable_Stream$ConsWrapper;
//@ sourceMappingURL=Stream$ConsWrapper.js.map

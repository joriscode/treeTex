/** @constructor */
ScalaJS.c.scala_collection_immutable_StringLike$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.scala$collection$immutable$StringLike$$LF$1 = 0;
  this.scala$collection$immutable$StringLike$$FF$1 = 0;
  this.scala$collection$immutable$StringLike$$CR$1 = 0;
  this.SU$1 = 0
});
ScalaJS.c.scala_collection_immutable_StringLike$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_StringLike$.prototype.constructor = ScalaJS.c.scala_collection_immutable_StringLike$;
ScalaJS.c.scala_collection_immutable_StringLike$.prototype.scala$collection$immutable$StringLike$$LF__C = (function() {
  return this.scala$collection$immutable$StringLike$$LF$1
});
ScalaJS.c.scala_collection_immutable_StringLike$.prototype.scala$collection$immutable$StringLike$$FF__C = (function() {
  return this.scala$collection$immutable$StringLike$$FF$1
});
ScalaJS.c.scala_collection_immutable_StringLike$.prototype.scala$collection$immutable$StringLike$$CR__C = (function() {
  return this.scala$collection$immutable$StringLike$$CR$1
});
ScalaJS.c.scala_collection_immutable_StringLike$.prototype.SU__p1__C = (function() {
  return this.SU$1
});
ScalaJS.c.scala_collection_immutable_StringLike$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_immutable_StringLike = this;
  this.scala$collection$immutable$StringLike$$LF$1 = 10;
  this.scala$collection$immutable$StringLike$$FF$1 = 12;
  this.scala$collection$immutable$StringLike$$CR$1 = 13;
  this.SU$1 = 26;
  return this
});
ScalaJS.c.scala_collection_immutable_StringLike$.prototype.scala$collection$immutable$StringLike$$CR__ = (function() {
  return ScalaJS.bC(this.scala$collection$immutable$StringLike$$CR__C())
});
ScalaJS.c.scala_collection_immutable_StringLike$.prototype.scala$collection$immutable$StringLike$$FF__ = (function() {
  return ScalaJS.bC(this.scala$collection$immutable$StringLike$$FF__C())
});
ScalaJS.c.scala_collection_immutable_StringLike$.prototype.scala$collection$immutable$StringLike$$LF__ = (function() {
  return ScalaJS.bC(this.scala$collection$immutable$StringLike$$LF__C())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_StringLike$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_StringLike$.prototype = ScalaJS.c.scala_collection_immutable_StringLike$.prototype;
ScalaJS.is.scala_collection_immutable_StringLike$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_StringLike$)))
});
ScalaJS.as.scala_collection_immutable_StringLike$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_StringLike$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.StringLike")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_StringLike$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_StringLike$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_StringLike$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_StringLike$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.StringLike;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_StringLike$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_StringLike$: 0
}, false, "scala.collection.immutable.StringLike$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_StringLike$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_StringLike$.prototype.$classData = ScalaJS.data.scala_collection_immutable_StringLike$;
ScalaJS.moduleInstances.scala_collection_immutable_StringLike = undefined;
ScalaJS.modules.scala_collection_immutable_StringLike = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_StringLike)) {
    ScalaJS.moduleInstances.scala_collection_immutable_StringLike = new ScalaJS.c.scala_collection_immutable_StringLike$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_StringLike
});
//@ sourceMappingURL=StringLike$.js.map

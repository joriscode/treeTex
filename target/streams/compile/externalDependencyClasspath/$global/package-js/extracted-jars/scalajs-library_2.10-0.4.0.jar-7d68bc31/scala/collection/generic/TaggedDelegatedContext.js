/** @constructor */
ScalaJS.c.scala_collection_generic_TaggedDelegatedContext = (function() {
  ScalaJS.c.scala_collection_generic_DelegatedContext.call(this);
  this.tag$2 = 0
});
ScalaJS.c.scala_collection_generic_TaggedDelegatedContext.prototype = new ScalaJS.inheritable.scala_collection_generic_DelegatedContext();
ScalaJS.c.scala_collection_generic_TaggedDelegatedContext.prototype.constructor = ScalaJS.c.scala_collection_generic_TaggedDelegatedContext;
ScalaJS.c.scala_collection_generic_TaggedDelegatedContext.prototype.tag__I = (function() {
  return this.tag$2
});
ScalaJS.c.scala_collection_generic_TaggedDelegatedContext.prototype.init___Lscala_collection_generic_Signalling__I = (function(deleg, tag) {
  this.tag$2 = tag;
  ScalaJS.c.scala_collection_generic_DelegatedContext.prototype.init___Lscala_collection_generic_Signalling.call(this, deleg);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_TaggedDelegatedContext = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_TaggedDelegatedContext.prototype = ScalaJS.c.scala_collection_generic_TaggedDelegatedContext.prototype;
ScalaJS.is.scala_collection_generic_TaggedDelegatedContext = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_TaggedDelegatedContext)))
});
ScalaJS.as.scala_collection_generic_TaggedDelegatedContext = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_TaggedDelegatedContext(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.TaggedDelegatedContext")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_TaggedDelegatedContext = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_TaggedDelegatedContext)))
});
ScalaJS.asArrayOf.scala_collection_generic_TaggedDelegatedContext = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_TaggedDelegatedContext(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.TaggedDelegatedContext;", depth)
  }
});
ScalaJS.data.scala_collection_generic_TaggedDelegatedContext = new ScalaJS.ClassTypeData({
  scala_collection_generic_TaggedDelegatedContext: 0
}, false, "scala.collection.generic.TaggedDelegatedContext", ScalaJS.data.scala_collection_generic_DelegatedContext, {
  scala_collection_generic_TaggedDelegatedContext: 1,
  scala_collection_generic_DelegatedContext: 1,
  scala_collection_generic_DelegatedSignalling: 1,
  scala_collection_generic_Signalling: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_TaggedDelegatedContext.prototype.$classData = ScalaJS.data.scala_collection_generic_TaggedDelegatedContext;
//@ sourceMappingURL=TaggedDelegatedContext.js.map

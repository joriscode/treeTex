/** @constructor */
ScalaJS.c.scala_collection_generic_IdleSignalling$ = (function() {
  ScalaJS.c.scala_collection_generic_DefaultSignalling.call(this)
});
ScalaJS.c.scala_collection_generic_IdleSignalling$.prototype = new ScalaJS.inheritable.scala_collection_generic_DefaultSignalling();
ScalaJS.c.scala_collection_generic_IdleSignalling$.prototype.constructor = ScalaJS.c.scala_collection_generic_IdleSignalling$;
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_IdleSignalling$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_IdleSignalling$.prototype = ScalaJS.c.scala_collection_generic_IdleSignalling$.prototype;
ScalaJS.is.scala_collection_generic_IdleSignalling$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_IdleSignalling$)))
});
ScalaJS.as.scala_collection_generic_IdleSignalling$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_IdleSignalling$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.IdleSignalling")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_IdleSignalling$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_IdleSignalling$)))
});
ScalaJS.asArrayOf.scala_collection_generic_IdleSignalling$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_IdleSignalling$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.IdleSignalling;", depth)
  }
});
ScalaJS.data.scala_collection_generic_IdleSignalling$ = new ScalaJS.ClassTypeData({
  scala_collection_generic_IdleSignalling$: 0
}, false, "scala.collection.generic.IdleSignalling$", ScalaJS.data.scala_collection_generic_DefaultSignalling, {
  scala_collection_generic_IdleSignalling$: 1,
  scala_collection_generic_DefaultSignalling: 1,
  scala_collection_generic_VolatileAbort: 1,
  scala_collection_generic_Signalling: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_IdleSignalling$.prototype.$classData = ScalaJS.data.scala_collection_generic_IdleSignalling$;
ScalaJS.moduleInstances.scala_collection_generic_IdleSignalling = undefined;
ScalaJS.modules.scala_collection_generic_IdleSignalling = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_generic_IdleSignalling)) {
    ScalaJS.moduleInstances.scala_collection_generic_IdleSignalling = new ScalaJS.c.scala_collection_generic_IdleSignalling$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_generic_IdleSignalling
});
//@ sourceMappingURL=IdleSignalling$.js.map

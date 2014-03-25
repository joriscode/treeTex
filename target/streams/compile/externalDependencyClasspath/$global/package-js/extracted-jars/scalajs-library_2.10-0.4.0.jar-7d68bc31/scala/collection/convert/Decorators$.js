/** @constructor */
ScalaJS.c.scala_collection_convert_Decorators$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_convert_Decorators$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_convert_Decorators$.prototype.constructor = ScalaJS.c.scala_collection_convert_Decorators$;
ScalaJS.c.scala_collection_convert_Decorators$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_convert_Decorators = this;
  ScalaJS.impls.scala_collection_convert_Decorators$class__$init$__Lscala_collection_convert_Decorators__V(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Decorators$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Decorators$.prototype = ScalaJS.c.scala_collection_convert_Decorators$.prototype;
ScalaJS.is.scala_collection_convert_Decorators$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Decorators$)))
});
ScalaJS.as.scala_collection_convert_Decorators$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Decorators$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Decorators")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Decorators$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Decorators$)))
});
ScalaJS.asArrayOf.scala_collection_convert_Decorators$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Decorators$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Decorators;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Decorators$ = new ScalaJS.ClassTypeData({
  scala_collection_convert_Decorators$: 0
}, false, "scala.collection.convert.Decorators$", ScalaJS.data.java_lang_Object, {
  scala_collection_convert_Decorators$: 1,
  scala_collection_convert_Decorators: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Decorators$.prototype.$classData = ScalaJS.data.scala_collection_convert_Decorators$;
ScalaJS.moduleInstances.scala_collection_convert_Decorators = undefined;
ScalaJS.modules.scala_collection_convert_Decorators = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_convert_Decorators)) {
    ScalaJS.moduleInstances.scala_collection_convert_Decorators = new ScalaJS.c.scala_collection_convert_Decorators$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_convert_Decorators
});
//@ sourceMappingURL=Decorators$.js.map

/** @constructor */
ScalaJS.c.scala_collection_script_Index$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this)
});
ScalaJS.c.scala_collection_script_Index$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_collection_script_Index$.prototype.constructor = ScalaJS.c.scala_collection_script_Index$;
ScalaJS.c.scala_collection_script_Index$.prototype.toString__T = (function() {
  return "Index"
});
ScalaJS.c.scala_collection_script_Index$.prototype.apply__I__Lscala_collection_script_Index = (function(n) {
  return new ScalaJS.c.scala_collection_script_Index().init___I(n)
});
ScalaJS.c.scala_collection_script_Index$.prototype.unapply__Lscala_collection_script_Index__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(ScalaJS.bI(x$0.n__I()))
  }
});
ScalaJS.c.scala_collection_script_Index$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_collection_script_Index()
});
ScalaJS.c.scala_collection_script_Index$.prototype.apply__O__O = (function(v1) {
  return this.apply__I__Lscala_collection_script_Index(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_script_Index$.prototype.unapply__Lscala_collection_script_Index__ = (function(x$0) {
  return this.unapply__Lscala_collection_script_Index__Lscala_Option(x$0)
});
ScalaJS.c.scala_collection_script_Index$.prototype.apply__I__ = (function(n) {
  return this.apply__I__Lscala_collection_script_Index(n)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_script_Index$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_script_Index$.prototype = ScalaJS.c.scala_collection_script_Index$.prototype;
ScalaJS.is.scala_collection_script_Index$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_script_Index$)))
});
ScalaJS.as.scala_collection_script_Index$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_script_Index$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.script.Index")
  }
});
ScalaJS.isArrayOf.scala_collection_script_Index$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_script_Index$)))
});
ScalaJS.asArrayOf.scala_collection_script_Index$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_script_Index$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.script.Index;", depth)
  }
});
ScalaJS.data.scala_collection_script_Index$ = new ScalaJS.ClassTypeData({
  scala_collection_script_Index$: 0
}, false, "scala.collection.script.Index$", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_collection_script_Index$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_script_Index$.prototype.$classData = ScalaJS.data.scala_collection_script_Index$;
ScalaJS.moduleInstances.scala_collection_script_Index = undefined;
ScalaJS.modules.scala_collection_script_Index = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_script_Index)) {
    ScalaJS.moduleInstances.scala_collection_script_Index = new ScalaJS.c.scala_collection_script_Index$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_script_Index
});
//@ sourceMappingURL=Index$.js.map

/** @constructor */
ScalaJS.c.scala_None$ = (function() {
  ScalaJS.c.scala_Option.call(this)
});
ScalaJS.c.scala_None$.prototype = new ScalaJS.inheritable.scala_Option();
ScalaJS.c.scala_None$.prototype.constructor = ScalaJS.c.scala_None$;
ScalaJS.c.scala_None$.prototype.isEmpty__Z = (function() {
  return true
});
ScalaJS.c.scala_None$.prototype.get__Lscala_Nothing = (function() {
  throw new ScalaJS.c.java_util_NoSuchElementException().init___T("None.get")
});
ScalaJS.c.scala_None$.prototype.productPrefix__T = (function() {
  return "None"
});
ScalaJS.c.scala_None$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_None$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_None$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_None$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_None$(x$1)
});
ScalaJS.c.scala_None$.prototype.hashCode__I = (function() {
  return 2433880
});
ScalaJS.c.scala_None$.prototype.toString__T = (function() {
  return "None"
});
ScalaJS.c.scala_None$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_None()
});
ScalaJS.c.scala_None$.prototype.get__O = (function() {
  return this.get__Lscala_Nothing()
});
/** @constructor */
ScalaJS.inheritable.scala_None$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_None$.prototype = ScalaJS.c.scala_None$.prototype;
ScalaJS.is.scala_None$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_None$)))
});
ScalaJS.as.scala_None$ = (function(obj) {
  if ((ScalaJS.is.scala_None$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.None")
  }
});
ScalaJS.isArrayOf.scala_None$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_None$)))
});
ScalaJS.asArrayOf.scala_None$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_None$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.None;", depth)
  }
});
ScalaJS.data.scala_None$ = new ScalaJS.ClassTypeData({
  scala_None$: 0
}, false, "scala.None$", ScalaJS.data.scala_Option, {
  scala_None$: 1,
  scala_Option: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_None$.prototype.$classData = ScalaJS.data.scala_None$;
ScalaJS.moduleInstances.scala_None = undefined;
ScalaJS.modules.scala_None = (function() {
  if ((!ScalaJS.moduleInstances.scala_None)) {
    ScalaJS.moduleInstances.scala_None = new ScalaJS.c.scala_None$().init___()
  };
  return ScalaJS.moduleInstances.scala_None
});
//@ sourceMappingURL=None$.js.map

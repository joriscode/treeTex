/** @constructor */
ScalaJS.c.scala_collection_script_End$ = (function() {
  ScalaJS.c.scala_collection_script_Location.call(this)
});
ScalaJS.c.scala_collection_script_End$.prototype = new ScalaJS.inheritable.scala_collection_script_Location();
ScalaJS.c.scala_collection_script_End$.prototype.constructor = ScalaJS.c.scala_collection_script_End$;
ScalaJS.c.scala_collection_script_End$.prototype.productPrefix__T = (function() {
  return "End"
});
ScalaJS.c.scala_collection_script_End$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_collection_script_End$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_collection_script_End$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_script_End$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_script_End$(x$1)
});
ScalaJS.c.scala_collection_script_End$.prototype.hashCode__I = (function() {
  return 69819
});
ScalaJS.c.scala_collection_script_End$.prototype.toString__T = (function() {
  return "End"
});
ScalaJS.c.scala_collection_script_End$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_collection_script_End()
});
ScalaJS.c.scala_collection_script_End$.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_script_Location.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_script_End = this;
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_script_End$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_script_End$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_script_End$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_script_End$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_script_End$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_script_End$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_script_End$.prototype = ScalaJS.c.scala_collection_script_End$.prototype;
ScalaJS.is.scala_collection_script_End$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_script_End$)))
});
ScalaJS.as.scala_collection_script_End$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_script_End$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.script.End")
  }
});
ScalaJS.isArrayOf.scala_collection_script_End$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_script_End$)))
});
ScalaJS.asArrayOf.scala_collection_script_End$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_script_End$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.script.End;", depth)
  }
});
ScalaJS.data.scala_collection_script_End$ = new ScalaJS.ClassTypeData({
  scala_collection_script_End$: 0
}, false, "scala.collection.script.End$", ScalaJS.data.scala_collection_script_Location, {
  scala_collection_script_End$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_script_Location: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_script_End$.prototype.$classData = ScalaJS.data.scala_collection_script_End$;
ScalaJS.moduleInstances.scala_collection_script_End = undefined;
ScalaJS.modules.scala_collection_script_End = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_script_End)) {
    ScalaJS.moduleInstances.scala_collection_script_End = new ScalaJS.c.scala_collection_script_End$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_script_End
});
//@ sourceMappingURL=End$.js.map
/** @constructor */
ScalaJS.c.scala_collection_immutable_ListSerializeEnd$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_ListSerializeEnd$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_ListSerializeEnd$.prototype.constructor = ScalaJS.c.scala_collection_immutable_ListSerializeEnd$;
ScalaJS.c.scala_collection_immutable_ListSerializeEnd$.prototype.productPrefix__T = (function() {
  return "ListSerializeEnd"
});
ScalaJS.c.scala_collection_immutable_ListSerializeEnd$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_collection_immutable_ListSerializeEnd$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_collection_immutable_ListSerializeEnd$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_ListSerializeEnd$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_immutable_ListSerializeEnd$(x$1)
});
ScalaJS.c.scala_collection_immutable_ListSerializeEnd$.prototype.hashCode__I = (function() {
  return -1720972871
});
ScalaJS.c.scala_collection_immutable_ListSerializeEnd$.prototype.toString__T = (function() {
  return "ListSerializeEnd"
});
ScalaJS.c.scala_collection_immutable_ListSerializeEnd$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_ListSerializeEnd()
});
ScalaJS.c.scala_collection_immutable_ListSerializeEnd$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_immutable_ListSerializeEnd = this;
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_ListSerializeEnd$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_immutable_ListSerializeEnd$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_ListSerializeEnd$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_immutable_ListSerializeEnd$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_immutable_ListSerializeEnd$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_ListSerializeEnd$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_ListSerializeEnd$.prototype = ScalaJS.c.scala_collection_immutable_ListSerializeEnd$.prototype;
ScalaJS.is.scala_collection_immutable_ListSerializeEnd$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_ListSerializeEnd$)))
});
ScalaJS.as.scala_collection_immutable_ListSerializeEnd$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_ListSerializeEnd$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.ListSerializeEnd")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_ListSerializeEnd$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_ListSerializeEnd$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_ListSerializeEnd$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_ListSerializeEnd$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.ListSerializeEnd;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_ListSerializeEnd$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_ListSerializeEnd$: 0
}, false, "scala.collection.immutable.ListSerializeEnd$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_ListSerializeEnd$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_ListSerializeEnd$.prototype.$classData = ScalaJS.data.scala_collection_immutable_ListSerializeEnd$;
ScalaJS.moduleInstances.scala_collection_immutable_ListSerializeEnd = undefined;
ScalaJS.modules.scala_collection_immutable_ListSerializeEnd = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_ListSerializeEnd)) {
    ScalaJS.moduleInstances.scala_collection_immutable_ListSerializeEnd = new ScalaJS.c.scala_collection_immutable_ListSerializeEnd$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_ListSerializeEnd
});
//@ sourceMappingURL=ListSerializeEnd$.js.map

/** @constructor */
ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$.prototype.constructor = ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$;
ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$.prototype.productPrefix__T = (function() {
  return "TrieMapSerializationEnd"
});
ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_concurrent_TrieMapSerializationEnd$(x$1)
});
ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$.prototype.hashCode__I = (function() {
  return 289833389
});
ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$.prototype.toString__T = (function() {
  return "TrieMapSerializationEnd"
});
ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_concurrent_TrieMapSerializationEnd()
});
ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_concurrent_TrieMapSerializationEnd = this;
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_concurrent_TrieMapSerializationEnd$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_concurrent_TrieMapSerializationEnd$.prototype = ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$.prototype;
ScalaJS.is.scala_collection_concurrent_TrieMapSerializationEnd$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_concurrent_TrieMapSerializationEnd$)))
});
ScalaJS.as.scala_collection_concurrent_TrieMapSerializationEnd$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_concurrent_TrieMapSerializationEnd$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.concurrent.TrieMapSerializationEnd")
  }
});
ScalaJS.isArrayOf.scala_collection_concurrent_TrieMapSerializationEnd$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_concurrent_TrieMapSerializationEnd$)))
});
ScalaJS.asArrayOf.scala_collection_concurrent_TrieMapSerializationEnd$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_concurrent_TrieMapSerializationEnd$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.concurrent.TrieMapSerializationEnd;", depth)
  }
});
ScalaJS.data.scala_collection_concurrent_TrieMapSerializationEnd$ = new ScalaJS.ClassTypeData({
  scala_collection_concurrent_TrieMapSerializationEnd$: 0
}, false, "scala.collection.concurrent.TrieMapSerializationEnd$", ScalaJS.data.java_lang_Object, {
  scala_collection_concurrent_TrieMapSerializationEnd$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$.prototype.$classData = ScalaJS.data.scala_collection_concurrent_TrieMapSerializationEnd$;
ScalaJS.moduleInstances.scala_collection_concurrent_TrieMapSerializationEnd = undefined;
ScalaJS.modules.scala_collection_concurrent_TrieMapSerializationEnd = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_concurrent_TrieMapSerializationEnd)) {
    ScalaJS.moduleInstances.scala_collection_concurrent_TrieMapSerializationEnd = new ScalaJS.c.scala_collection_concurrent_TrieMapSerializationEnd$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_concurrent_TrieMapSerializationEnd
});
//@ sourceMappingURL=TrieMapSerializationEnd$.js.map

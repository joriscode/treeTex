/** @constructor */
ScalaJS.c.scala_collection_concurrent_TNode = (function() {
  ScalaJS.c.scala_collection_concurrent_MainNode.call(this);
  this.k$3 = null;
  this.v$3 = null;
  this.hc$3 = 0
});
ScalaJS.c.scala_collection_concurrent_TNode.prototype = new ScalaJS.inheritable.scala_collection_concurrent_MainNode();
ScalaJS.c.scala_collection_concurrent_TNode.prototype.constructor = ScalaJS.c.scala_collection_concurrent_TNode;
ScalaJS.c.scala_collection_concurrent_TNode.prototype.k__O = (function() {
  return this.k$3
});
ScalaJS.c.scala_collection_concurrent_TNode.prototype.v__O = (function() {
  return this.v$3
});
ScalaJS.c.scala_collection_concurrent_TNode.prototype.hc__I = (function() {
  return this.hc$3
});
ScalaJS.c.scala_collection_concurrent_TNode.prototype.copy__Lscala_collection_concurrent_TNode = (function() {
  return new ScalaJS.c.scala_collection_concurrent_TNode().init___O__O__I(this.k__O(), this.v__O(), this.hc__I())
});
ScalaJS.c.scala_collection_concurrent_TNode.prototype.copyTombed__Lscala_collection_concurrent_TNode = (function() {
  return new ScalaJS.c.scala_collection_concurrent_TNode().init___O__O__I(this.k__O(), this.v__O(), this.hc__I())
});
ScalaJS.c.scala_collection_concurrent_TNode.prototype.copyUntombed__Lscala_collection_concurrent_SNode = (function() {
  return new ScalaJS.c.scala_collection_concurrent_SNode().init___O__O__I(this.k__O(), this.v__O(), this.hc__I())
});
ScalaJS.c.scala_collection_concurrent_TNode.prototype.kvPair__Lscala_Tuple2 = (function() {
  return new ScalaJS.c.scala_Tuple2().init___O__O(this.k__O(), this.v__O())
});
ScalaJS.c.scala_collection_concurrent_TNode.prototype.cachedSize__O__I = (function(ct) {
  return 1
});
ScalaJS.c.scala_collection_concurrent_TNode.prototype.string__I__T = (function(lev) {
  return (("" + new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("  ")).$$times__I__T(lev)) + new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("TNode(%s, %s, %x, !)")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [this.k__O(), this.v__O(), ScalaJS.bI(this.hc__I())]))))
});
ScalaJS.c.scala_collection_concurrent_TNode.prototype.init___O__O__I = (function(k, v, hc) {
  this.k$3 = k;
  this.v$3 = v;
  this.hc$3 = hc;
  ScalaJS.c.scala_collection_concurrent_MainNode.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_concurrent_TNode.prototype.kvPair__ = (function() {
  return this.kvPair__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_concurrent_TNode.prototype.copyUntombed__ = (function() {
  return this.copyUntombed__Lscala_collection_concurrent_SNode()
});
ScalaJS.c.scala_collection_concurrent_TNode.prototype.copyTombed__ = (function() {
  return this.copyTombed__Lscala_collection_concurrent_TNode()
});
ScalaJS.c.scala_collection_concurrent_TNode.prototype.copy__ = (function() {
  return this.copy__Lscala_collection_concurrent_TNode()
});
ScalaJS.c.scala_collection_concurrent_TNode.prototype.hc__ = (function() {
  return ScalaJS.bI(this.hc__I())
});
ScalaJS.c.scala_collection_concurrent_TNode.prototype.v__ = (function() {
  return this.v__O()
});
ScalaJS.c.scala_collection_concurrent_TNode.prototype.k__ = (function() {
  return this.k__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_concurrent_TNode = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_concurrent_TNode.prototype = ScalaJS.c.scala_collection_concurrent_TNode.prototype;
ScalaJS.is.scala_collection_concurrent_TNode = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_concurrent_TNode)))
});
ScalaJS.as.scala_collection_concurrent_TNode = (function(obj) {
  if ((ScalaJS.is.scala_collection_concurrent_TNode(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.concurrent.TNode")
  }
});
ScalaJS.isArrayOf.scala_collection_concurrent_TNode = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_concurrent_TNode)))
});
ScalaJS.asArrayOf.scala_collection_concurrent_TNode = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_concurrent_TNode(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.concurrent.TNode;", depth)
  }
});
ScalaJS.data.scala_collection_concurrent_TNode = new ScalaJS.ClassTypeData({
  scala_collection_concurrent_TNode: 0
}, false, "scala.collection.concurrent.TNode", ScalaJS.data.scala_collection_concurrent_MainNode, {
  scala_collection_concurrent_TNode: 1,
  scala_collection_concurrent_KVNode: 1,
  scala_collection_concurrent_MainNode: 1,
  scala_collection_concurrent_BasicNode: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_concurrent_TNode.prototype.$classData = ScalaJS.data.scala_collection_concurrent_TNode;
//@ sourceMappingURL=TNode.js.map

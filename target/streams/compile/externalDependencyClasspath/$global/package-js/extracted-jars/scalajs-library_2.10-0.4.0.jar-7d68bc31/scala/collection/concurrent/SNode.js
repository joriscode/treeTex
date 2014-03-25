/** @constructor */
ScalaJS.c.scala_collection_concurrent_SNode = (function() {
  ScalaJS.c.scala_collection_concurrent_BasicNode.call(this);
  this.k$2 = null;
  this.v$2 = null;
  this.hc$2 = 0
});
ScalaJS.c.scala_collection_concurrent_SNode.prototype = new ScalaJS.inheritable.scala_collection_concurrent_BasicNode();
ScalaJS.c.scala_collection_concurrent_SNode.prototype.constructor = ScalaJS.c.scala_collection_concurrent_SNode;
ScalaJS.c.scala_collection_concurrent_SNode.prototype.k__O = (function() {
  return this.k$2
});
ScalaJS.c.scala_collection_concurrent_SNode.prototype.v__O = (function() {
  return this.v$2
});
ScalaJS.c.scala_collection_concurrent_SNode.prototype.hc__I = (function() {
  return this.hc$2
});
ScalaJS.c.scala_collection_concurrent_SNode.prototype.copy__Lscala_collection_concurrent_SNode = (function() {
  return new ScalaJS.c.scala_collection_concurrent_SNode().init___O__O__I(this.k__O(), this.v__O(), this.hc__I())
});
ScalaJS.c.scala_collection_concurrent_SNode.prototype.copyTombed__Lscala_collection_concurrent_TNode = (function() {
  return new ScalaJS.c.scala_collection_concurrent_TNode().init___O__O__I(this.k__O(), this.v__O(), this.hc__I())
});
ScalaJS.c.scala_collection_concurrent_SNode.prototype.copyUntombed__Lscala_collection_concurrent_SNode = (function() {
  return new ScalaJS.c.scala_collection_concurrent_SNode().init___O__O__I(this.k__O(), this.v__O(), this.hc__I())
});
ScalaJS.c.scala_collection_concurrent_SNode.prototype.kvPair__Lscala_Tuple2 = (function() {
  return new ScalaJS.c.scala_Tuple2().init___O__O(this.k__O(), this.v__O())
});
ScalaJS.c.scala_collection_concurrent_SNode.prototype.string__I__T = (function(lev) {
  return (("" + new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("  ")).$$times__I__T(lev)) + new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("SNode(%s, %s, %x)")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [this.k__O(), this.v__O(), ScalaJS.bI(this.hc__I())]))))
});
ScalaJS.c.scala_collection_concurrent_SNode.prototype.init___O__O__I = (function(k, v, hc) {
  this.k$2 = k;
  this.v$2 = v;
  this.hc$2 = hc;
  ScalaJS.c.scala_collection_concurrent_BasicNode.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_concurrent_SNode.prototype.kvPair__ = (function() {
  return this.kvPair__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_concurrent_SNode.prototype.copyUntombed__ = (function() {
  return this.copyUntombed__Lscala_collection_concurrent_SNode()
});
ScalaJS.c.scala_collection_concurrent_SNode.prototype.copyTombed__ = (function() {
  return this.copyTombed__Lscala_collection_concurrent_TNode()
});
ScalaJS.c.scala_collection_concurrent_SNode.prototype.copy__ = (function() {
  return this.copy__Lscala_collection_concurrent_SNode()
});
ScalaJS.c.scala_collection_concurrent_SNode.prototype.hc__ = (function() {
  return ScalaJS.bI(this.hc__I())
});
ScalaJS.c.scala_collection_concurrent_SNode.prototype.v__ = (function() {
  return this.v__O()
});
ScalaJS.c.scala_collection_concurrent_SNode.prototype.k__ = (function() {
  return this.k__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_concurrent_SNode = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_concurrent_SNode.prototype = ScalaJS.c.scala_collection_concurrent_SNode.prototype;
ScalaJS.is.scala_collection_concurrent_SNode = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_concurrent_SNode)))
});
ScalaJS.as.scala_collection_concurrent_SNode = (function(obj) {
  if ((ScalaJS.is.scala_collection_concurrent_SNode(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.concurrent.SNode")
  }
});
ScalaJS.isArrayOf.scala_collection_concurrent_SNode = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_concurrent_SNode)))
});
ScalaJS.asArrayOf.scala_collection_concurrent_SNode = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_concurrent_SNode(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.concurrent.SNode;", depth)
  }
});
ScalaJS.data.scala_collection_concurrent_SNode = new ScalaJS.ClassTypeData({
  scala_collection_concurrent_SNode: 0
}, false, "scala.collection.concurrent.SNode", ScalaJS.data.scala_collection_concurrent_BasicNode, {
  scala_collection_concurrent_SNode: 1,
  scala_collection_concurrent_KVNode: 1,
  scala_collection_concurrent_BasicNode: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_concurrent_SNode.prototype.$classData = ScalaJS.data.scala_collection_concurrent_SNode;
//@ sourceMappingURL=SNode.js.map

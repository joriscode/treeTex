/** @constructor */
ScalaJS.c.scala_collection_concurrent_FailedNode = (function() {
  ScalaJS.c.scala_collection_concurrent_MainNode.call(this);
  this.p$3 = null
});
ScalaJS.c.scala_collection_concurrent_FailedNode.prototype = new ScalaJS.inheritable.scala_collection_concurrent_MainNode();
ScalaJS.c.scala_collection_concurrent_FailedNode.prototype.constructor = ScalaJS.c.scala_collection_concurrent_FailedNode;
ScalaJS.c.scala_collection_concurrent_FailedNode.prototype.string__I__Lscala_Nothing = (function(lev) {
  throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___()
});
ScalaJS.c.scala_collection_concurrent_FailedNode.prototype.cachedSize__O__I = (function(ct) {
  throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___()
});
ScalaJS.c.scala_collection_concurrent_FailedNode.prototype.toString__T = (function() {
  return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("FailedNode(%s)")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [this.p$3])))
});
ScalaJS.c.scala_collection_concurrent_FailedNode.prototype.string__I__T = (function(x$1) {
  return this.string__I__Lscala_Nothing(x$1)
});
ScalaJS.c.scala_collection_concurrent_FailedNode.prototype.init___Lscala_collection_concurrent_MainNode = (function(p) {
  this.p$3 = p;
  ScalaJS.c.scala_collection_concurrent_MainNode.prototype.init___.call(this);
  this.WRITE$undPREV__Lscala_collection_concurrent_MainNode__V(p);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_concurrent_FailedNode = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_concurrent_FailedNode.prototype = ScalaJS.c.scala_collection_concurrent_FailedNode.prototype;
ScalaJS.is.scala_collection_concurrent_FailedNode = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_concurrent_FailedNode)))
});
ScalaJS.as.scala_collection_concurrent_FailedNode = (function(obj) {
  if ((ScalaJS.is.scala_collection_concurrent_FailedNode(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.concurrent.FailedNode")
  }
});
ScalaJS.isArrayOf.scala_collection_concurrent_FailedNode = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_concurrent_FailedNode)))
});
ScalaJS.asArrayOf.scala_collection_concurrent_FailedNode = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_concurrent_FailedNode(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.concurrent.FailedNode;", depth)
  }
});
ScalaJS.data.scala_collection_concurrent_FailedNode = new ScalaJS.ClassTypeData({
  scala_collection_concurrent_FailedNode: 0
}, false, "scala.collection.concurrent.FailedNode", ScalaJS.data.scala_collection_concurrent_MainNode, {
  scala_collection_concurrent_FailedNode: 1,
  scala_collection_concurrent_MainNode: 1,
  scala_collection_concurrent_BasicNode: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_concurrent_FailedNode.prototype.$classData = ScalaJS.data.scala_collection_concurrent_FailedNode;
//@ sourceMappingURL=FailedNode.js.map

/** @constructor */
ScalaJS.c.scala_collection_concurrent_LNode = (function() {
  ScalaJS.c.scala_collection_concurrent_MainNode.call(this);
  this.listmap$3 = null
});
ScalaJS.c.scala_collection_concurrent_LNode.prototype = new ScalaJS.inheritable.scala_collection_concurrent_MainNode();
ScalaJS.c.scala_collection_concurrent_LNode.prototype.constructor = ScalaJS.c.scala_collection_concurrent_LNode;
ScalaJS.c.scala_collection_concurrent_LNode.prototype.listmap__Lscala_collection_immutable_ListMap = (function() {
  return this.listmap$3
});
ScalaJS.c.scala_collection_concurrent_LNode.prototype.inserted__O__O__Lscala_collection_concurrent_LNode = (function(k, v) {
  return new ScalaJS.c.scala_collection_concurrent_LNode().init___Lscala_collection_immutable_ListMap(this.listmap__Lscala_collection_immutable_ListMap().$$plus__Lscala_Tuple2__Lscala_collection_immutable_ListMap(new ScalaJS.c.scala_Tuple2().init___O__O(k, v)))
});
ScalaJS.c.scala_collection_concurrent_LNode.prototype.removed__O__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode = (function(k, ct) {
  var updmap = this.listmap__Lscala_collection_immutable_ListMap().$$minus__O__Lscala_collection_immutable_ListMap(k);
  if ((updmap.size__I() > 1)) {
    return new ScalaJS.c.scala_collection_concurrent_LNode().init___Lscala_collection_immutable_ListMap(updmap)
  } else {
    var x1 = ScalaJS.as.scala_Tuple2(updmap.iterator__Lscala_collection_Iterator().next__O());
    matchEnd3: {
      if ((x1 !== null)) {
        var k$2 = x1.$$und1__O();
        var v = x1.$$und2__O();
        var x$1 = new ScalaJS.c.scala_Tuple2().init___O__O(k$2, v);
        break matchEnd3
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    };
    var k$3 = x$1.$$und1__O();
    var v$2 = x$1.$$und2__O();
    return new ScalaJS.c.scala_collection_concurrent_TNode().init___O__O__I(k$3, v$2, ct.computeHash__O__I(k$3))
  }
});
ScalaJS.c.scala_collection_concurrent_LNode.prototype.get__O__Lscala_Option = (function(k) {
  return this.listmap__Lscala_collection_immutable_ListMap().get__O__Lscala_Option(k)
});
ScalaJS.c.scala_collection_concurrent_LNode.prototype.cachedSize__O__I = (function(ct) {
  return this.listmap__Lscala_collection_immutable_ListMap().size__I()
});
ScalaJS.c.scala_collection_concurrent_LNode.prototype.string__I__T = (function(lev) {
  return (("" + new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(" ")).$$times__I__T(lev)) + new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("LNode(%s)")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [this.listmap__Lscala_collection_immutable_ListMap().mkString__T__T(", ")]))))
});
ScalaJS.c.scala_collection_concurrent_LNode.prototype.init___Lscala_collection_immutable_ListMap = (function(listmap) {
  this.listmap$3 = listmap;
  ScalaJS.c.scala_collection_concurrent_MainNode.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_concurrent_LNode.prototype.init___O__O = (function(k, v) {
  ScalaJS.c.scala_collection_concurrent_LNode.prototype.init___Lscala_collection_immutable_ListMap.call(this, ScalaJS.as.scala_collection_immutable_ListMap(ScalaJS.modules.scala_collection_immutable_ListMap().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(k), v)]), 1)))));
  return this
});
ScalaJS.c.scala_collection_concurrent_LNode.prototype.init___O__O__O__O = (function(k1, v1, k2, v2) {
  ScalaJS.c.scala_collection_concurrent_LNode.prototype.init___Lscala_collection_immutable_ListMap.call(this, ScalaJS.as.scala_collection_immutable_ListMap(ScalaJS.modules.scala_collection_immutable_ListMap().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(k1), v1), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(k2), v2)]), 1)))));
  return this
});
ScalaJS.c.scala_collection_concurrent_LNode.prototype.get__O__ = (function(k) {
  return this.get__O__Lscala_Option(k)
});
ScalaJS.c.scala_collection_concurrent_LNode.prototype.removed__O__Lscala_collection_concurrent_TrieMap__ = (function(k$2, ct) {
  return this.removed__O__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(k$2, ct)
});
ScalaJS.c.scala_collection_concurrent_LNode.prototype.inserted__O__O__ = (function(k$3, v) {
  return this.inserted__O__O__Lscala_collection_concurrent_LNode(k$3, v)
});
ScalaJS.c.scala_collection_concurrent_LNode.prototype.listmap__ = (function() {
  return this.listmap__Lscala_collection_immutable_ListMap()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_concurrent_LNode = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_concurrent_LNode.prototype = ScalaJS.c.scala_collection_concurrent_LNode.prototype;
ScalaJS.is.scala_collection_concurrent_LNode = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_concurrent_LNode)))
});
ScalaJS.as.scala_collection_concurrent_LNode = (function(obj) {
  if ((ScalaJS.is.scala_collection_concurrent_LNode(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.concurrent.LNode")
  }
});
ScalaJS.isArrayOf.scala_collection_concurrent_LNode = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_concurrent_LNode)))
});
ScalaJS.asArrayOf.scala_collection_concurrent_LNode = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_concurrent_LNode(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.concurrent.LNode;", depth)
  }
});
ScalaJS.data.scala_collection_concurrent_LNode = new ScalaJS.ClassTypeData({
  scala_collection_concurrent_LNode: 0
}, false, "scala.collection.concurrent.LNode", ScalaJS.data.scala_collection_concurrent_MainNode, {
  scala_collection_concurrent_LNode: 1,
  scala_collection_concurrent_MainNode: 1,
  scala_collection_concurrent_BasicNode: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_concurrent_LNode.prototype.$classData = ScalaJS.data.scala_collection_concurrent_LNode;
//@ sourceMappingURL=LNode.js.map

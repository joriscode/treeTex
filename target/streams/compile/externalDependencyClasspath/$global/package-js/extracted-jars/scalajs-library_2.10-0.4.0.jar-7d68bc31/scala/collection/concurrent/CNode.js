/** @constructor */
ScalaJS.c.scala_collection_concurrent_CNode = (function() {
  ScalaJS.c.scala_collection_concurrent_CNodeBase.call(this);
  this.bitmap$4 = 0;
  this.array$4 = null;
  this.gen$4 = null
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype = new ScalaJS.inheritable.scala_collection_concurrent_CNodeBase();
ScalaJS.c.scala_collection_concurrent_CNode.prototype.constructor = ScalaJS.c.scala_collection_concurrent_CNode;
ScalaJS.c.scala_collection_concurrent_CNode.prototype.bitmap__I = (function() {
  return this.bitmap$4
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.array__ALscala_collection_concurrent_BasicNode = (function() {
  return this.array$4
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.gen__Lscala_collection_concurrent_Gen = (function() {
  return this.gen$4
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.cachedSize__O__I = (function(ct) {
  var currsz = this.READ$undSIZE__I();
  if ((currsz !== -1)) {
    return currsz
  } else {
    var sz = this.computeSize__p4__Lscala_collection_concurrent_TrieMap__I(ScalaJS.as.scala_collection_concurrent_TrieMap(ct));
    while ((this.READ$undSIZE__I() === -1)) {
      this.CAS$undSIZE__I__I__Z(-1, sz)
    };
    return this.READ$undSIZE__I()
  }
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.computeSize__p4__Lscala_collection_concurrent_TrieMap__I = (function(ct) {
  var i = 0;
  var sz = 0;
  if ((this.array__ALscala_collection_concurrent_BasicNode().underlying.length > 0)) {
    var offset = ScalaJS.modules.scala_concurrent_forkjoin_ThreadLocalRandom().current__Lscala_concurrent_forkjoin_ThreadLocalRandom().nextInt__I__I__I(0, this.array__ALscala_collection_concurrent_BasicNode().underlying.length)
  } else {
    var offset = 0
  };
  while ((i < this.array__ALscala_collection_concurrent_BasicNode().underlying.length)) {
    var pos = ((i + offset) % this.array__ALscala_collection_concurrent_BasicNode().underlying.length);
    var x1 = this.array__ALscala_collection_concurrent_BasicNode().underlying[pos];
    matchEnd5: {
      if (ScalaJS.is.scala_collection_concurrent_SNode(x1)) {
        sz = (sz + 1);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd5
      };
      if (ScalaJS.is.scala_collection_concurrent_INode(x1)) {
        var x3 = ScalaJS.as.scala_collection_concurrent_INode(x1);
        sz = (sz + x3.cachedSize__Lscala_collection_concurrent_TrieMap__I(ct));
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd5
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    };
    i = (i + 1)
  };
  return sz
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.updatedAt__I__Lscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_CNode = (function(pos, nn, gen) {
  var len = this.array__ALscala_collection_concurrent_BasicNode().underlying.length;
  var narr = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_concurrent_BasicNode.getArrayOf(), [len]);
  ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.array__ALscala_collection_concurrent_BasicNode(), 0, narr, 0, len);
  narr.underlying[pos] = nn;
  return new ScalaJS.c.scala_collection_concurrent_CNode().init___I__ALscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen(this.bitmap__I(), narr, gen)
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.removedAt__I__I__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_CNode = (function(pos, flag, gen) {
  var arr = this.array__ALscala_collection_concurrent_BasicNode();
  var len = arr.underlying.length;
  var narr = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_concurrent_BasicNode.getArrayOf(), [(len - 1)]);
  ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(arr, 0, narr, 0, pos);
  ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(arr, (pos + 1), narr, pos, ((len - pos) - 1));
  return new ScalaJS.c.scala_collection_concurrent_CNode().init___I__ALscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen((this.bitmap__I() ^ flag), narr, gen)
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.insertedAt__I__I__Lscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_CNode = (function(pos, flag, nn, gen) {
  var len = this.array__ALscala_collection_concurrent_BasicNode().underlying.length;
  var bmp = this.bitmap__I();
  var narr = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_concurrent_BasicNode.getArrayOf(), [(len + 1)]);
  ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.array__ALscala_collection_concurrent_BasicNode(), 0, narr, 0, pos);
  narr.underlying[pos] = nn;
  ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.array__ALscala_collection_concurrent_BasicNode(), pos, narr, (pos + 1), (len - pos));
  return new ScalaJS.c.scala_collection_concurrent_CNode().init___I__ALscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen((bmp | flag), narr, gen)
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.renewed__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_CNode = (function(ngen, ct) {
  var i = 0;
  var arr = this.array__ALscala_collection_concurrent_BasicNode();
  var len = arr.underlying.length;
  var narr = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_concurrent_BasicNode.getArrayOf(), [len]);
  while ((i < len)) {
    var x1 = arr.underlying[i];
    matchEnd5: {
      if (ScalaJS.is.scala_collection_concurrent_INode(x1)) {
        var x2 = ScalaJS.as.scala_collection_concurrent_INode(x1);
        narr.underlying[i] = x2.copyToGen__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_INode(ngen, ct);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd5
      };
      if ((x1 !== null)) {
        var x3 = x1;
        narr.underlying[i] = x3;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd5
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    };
    i = (i + 1)
  };
  return new ScalaJS.c.scala_collection_concurrent_CNode().init___I__ALscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen(this.bitmap__I(), narr, ngen)
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.resurrect__p4__Lscala_collection_concurrent_INode__O__Lscala_collection_concurrent_BasicNode = (function(inode, inodemain) {
  var x1 = inodemain;
  if (ScalaJS.is.scala_collection_concurrent_TNode(x1)) {
    var x2 = ScalaJS.as.scala_collection_concurrent_TNode(x1);
    return x2.copyUntombed__Lscala_collection_concurrent_SNode()
  };
  return inode
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.toContracted__I__Lscala_collection_concurrent_MainNode = (function(lev) {
  if (((this.array__ALscala_collection_concurrent_BasicNode().underlying.length === 1) && (lev > 0))) {
    var x1 = this.array__ALscala_collection_concurrent_BasicNode().underlying[0];
    if (ScalaJS.is.scala_collection_concurrent_SNode(x1)) {
      var x2 = ScalaJS.as.scala_collection_concurrent_SNode(x1);
      return x2.copyTombed__Lscala_collection_concurrent_TNode()
    };
    return this
  } else {
    return this
  }
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.toCompressed__Lscala_collection_concurrent_TrieMap__I__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_MainNode = (function(ct, lev, gen) {
  var bmp = this.bitmap__I();
  var i = 0;
  var arr = this.array__ALscala_collection_concurrent_BasicNode();
  var tmparray = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_concurrent_BasicNode.getArrayOf(), [arr.underlying.length]);
  while ((i < arr.underlying.length)) {
    var sub = arr.underlying[i];
    var x1 = sub;
    matchEnd5: {
      if (ScalaJS.is.scala_collection_concurrent_INode(x1)) {
        var x2 = ScalaJS.as.scala_collection_concurrent_INode(x1);
        var inodemain = x2.gcasRead__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(ct);
        ScalaJS.modules.scala_Predef().assert__Z__V((inodemain !== null));
        tmparray.underlying[i] = this.resurrect__p4__Lscala_collection_concurrent_INode__O__Lscala_collection_concurrent_BasicNode(x2, inodemain);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd5
      };
      if (ScalaJS.is.scala_collection_concurrent_SNode(x1)) {
        var x3 = ScalaJS.as.scala_collection_concurrent_SNode(x1);
        tmparray.underlying[i] = x3;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd5
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    };
    i = (i + 1)
  };
  return new ScalaJS.c.scala_collection_concurrent_CNode().init___I__ALscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen(bmp, tmparray, gen).toContracted__I__Lscala_collection_concurrent_MainNode(lev)
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.string__I__T = (function(lev) {
  return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("CNode %x\n%s")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bI(this.bitmap__I()), ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(this.array__ALscala_collection_concurrent_BasicNode(), 1)).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(lev$3) {
    return (function(x$2) {
      return x$2.string__I__T((lev$3 + 1))
    })
  })(lev)), ScalaJS.modules.scala_Array().canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.java_lang_String.getClassOf()))), 1)).mkString__T__T("\n")])))
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.scala$collection$concurrent$CNode$$collectElems__Lscala_collection_Seq = (function() {
  return ScalaJS.as.scala_collection_Seq(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(this.array__ALscala_collection_concurrent_BasicNode(), 1)).flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x0$1) {
      var x1 = x0$1;
      if (ScalaJS.is.scala_collection_concurrent_SNode(x1)) {
        var x2 = ScalaJS.as.scala_collection_concurrent_SNode(x1);
        return ScalaJS.modules.scala_Option().option2Iterable__Lscala_Option__Lscala_collection_Iterable(new ScalaJS.c.scala_Some().init___O(x2.kvPair__Lscala_Tuple2()))
      };
      if (ScalaJS.is.scala_collection_concurrent_INode(x1)) {
        var x3 = ScalaJS.as.scala_collection_concurrent_INode(x1);
        var x1$2 = x3.mainnode$f;
        if (ScalaJS.is.scala_collection_concurrent_TNode(x1$2)) {
          var x2$2 = ScalaJS.as.scala_collection_concurrent_TNode(x1$2);
          return ScalaJS.modules.scala_Option().option2Iterable__Lscala_Option__Lscala_collection_Iterable(new ScalaJS.c.scala_Some().init___O(x2$2.kvPair__Lscala_Tuple2()))
        };
        if (ScalaJS.is.scala_collection_concurrent_LNode(x1$2)) {
          var x3$2 = ScalaJS.as.scala_collection_concurrent_LNode(x1$2);
          return x3$2.listmap__Lscala_collection_immutable_ListMap().toList__Lscala_collection_immutable_List()
        };
        if (ScalaJS.is.scala_collection_concurrent_CNode(x1$2)) {
          var x4 = ScalaJS.as.scala_collection_concurrent_CNode(x1$2);
          return x4.scala$collection$concurrent$CNode$$collectElems__Lscala_collection_Seq()
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })()), ScalaJS.modules.scala_Array().fallbackCanBuildFrom__Lscala_Predef$DummyImplicit__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_Predef$DummyImplicit().dummyImplicit__Lscala_Predef$DummyImplicit())))
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.collectLocalElems__p4__Lscala_collection_Seq = (function() {
  return ScalaJS.as.scala_collection_Seq(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(this.array__ALscala_collection_concurrent_BasicNode(), 1)).flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x0$2) {
      var x1 = x0$2;
      if (ScalaJS.is.scala_collection_concurrent_SNode(x1)) {
        var x2 = ScalaJS.as.scala_collection_concurrent_SNode(x1);
        return ScalaJS.modules.scala_Option().option2Iterable__Lscala_Option__Lscala_collection_Iterable(new ScalaJS.c.scala_Some().init___O(ScalaJS.objectToString(x2.kvPair__Lscala_Tuple2().$$und2__O())))
      };
      if (ScalaJS.is.scala_collection_concurrent_INode(x1)) {
        var x3 = ScalaJS.as.scala_collection_concurrent_INode(x1);
        return ScalaJS.modules.scala_Option().option2Iterable__Lscala_Option__Lscala_collection_Iterable(new ScalaJS.c.scala_Some().init___O((((("" + ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(ScalaJS.objectToString(x3))).drop__I__O(14))) + "(") + x3.gen$f) + ")")))
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })()), ScalaJS.modules.scala_Array().fallbackCanBuildFrom__Lscala_Predef$DummyImplicit__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_Predef$DummyImplicit().dummyImplicit__Lscala_Predef$DummyImplicit())))
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.toString__T = (function() {
  var elems = this.collectLocalElems__p4__Lscala_collection_Seq();
  return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("CNode(sz: %d; %s)")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bI(elems.size__I()), ScalaJS.as.scala_collection_TraversableOnce(elems.sorted__Lscala_math_Ordering__O(ScalaJS.modules.scala_math_Ordering$String())).mkString__T__T(", ")])))
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.init___I__ALscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen = (function(bitmap, array, gen) {
  this.bitmap$4 = bitmap;
  this.array$4 = array;
  this.gen$4 = gen;
  ScalaJS.c.scala_collection_concurrent_CNodeBase.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.scala$collection$concurrent$CNode$$collectElems__ = (function() {
  return this.scala$collection$concurrent$CNode$$collectElems__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.toCompressed__Lscala_collection_concurrent_TrieMap__I__Lscala_collection_concurrent_Gen__ = (function(ct, lev, gen) {
  return this.toCompressed__Lscala_collection_concurrent_TrieMap__I__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_MainNode(ct, lev, gen)
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.toContracted__I__ = (function(lev$2) {
  return this.toContracted__I__Lscala_collection_concurrent_MainNode(lev$2)
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.renewed__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__ = (function(ngen, ct$2) {
  return this.renewed__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_CNode(ngen, ct$2)
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.insertedAt__I__I__Lscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen__ = (function(pos, flag, nn, gen$2) {
  return this.insertedAt__I__I__Lscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_CNode(pos, flag, nn, gen$2)
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.removedAt__I__I__Lscala_collection_concurrent_Gen__ = (function(pos$2, flag$2, gen$3) {
  return this.removedAt__I__I__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_CNode(pos$2, flag$2, gen$3)
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.updatedAt__I__Lscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen__ = (function(pos$3, nn$2, gen$4) {
  return this.updatedAt__I__Lscala_collection_concurrent_BasicNode__Lscala_collection_concurrent_Gen__Lscala_collection_concurrent_CNode(pos$3, nn$2, gen$4)
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.gen__ = (function() {
  return this.gen__Lscala_collection_concurrent_Gen()
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.array__ = (function() {
  return this.array__ALscala_collection_concurrent_BasicNode()
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.bitmap__ = (function() {
  return ScalaJS.bI(this.bitmap__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_concurrent_CNode = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_concurrent_CNode.prototype = ScalaJS.c.scala_collection_concurrent_CNode.prototype;
ScalaJS.is.scala_collection_concurrent_CNode = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_concurrent_CNode)))
});
ScalaJS.as.scala_collection_concurrent_CNode = (function(obj) {
  if ((ScalaJS.is.scala_collection_concurrent_CNode(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.concurrent.CNode")
  }
});
ScalaJS.isArrayOf.scala_collection_concurrent_CNode = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_concurrent_CNode)))
});
ScalaJS.asArrayOf.scala_collection_concurrent_CNode = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_concurrent_CNode(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.concurrent.CNode;", depth)
  }
});
ScalaJS.data.scala_collection_concurrent_CNode = new ScalaJS.ClassTypeData({
  scala_collection_concurrent_CNode: 0
}, false, "scala.collection.concurrent.CNode", ScalaJS.data.scala_collection_concurrent_CNodeBase, {
  scala_collection_concurrent_CNode: 1,
  scala_collection_concurrent_CNodeBase: 1,
  scala_collection_concurrent_MainNode: 1,
  scala_collection_concurrent_BasicNode: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_concurrent_CNode.prototype.$classData = ScalaJS.data.scala_collection_concurrent_CNode;
//@ sourceMappingURL=CNode.js.map

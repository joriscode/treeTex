/** @constructor */
ScalaJS.c.scala_xml_NodeSeq = (function() {
  ScalaJS.c.scala_collection_AbstractSeq.call(this)
});
ScalaJS.c.scala_xml_NodeSeq.prototype = new ScalaJS.inheritable.scala_collection_AbstractSeq();
ScalaJS.c.scala_xml_NodeSeq.prototype.constructor = ScalaJS.c.scala_xml_NodeSeq;
ScalaJS.c.scala_xml_NodeSeq.prototype.strict$und$bang$eq__Lscala_xml_Equality__Z = (function(other) {
  return ScalaJS.impls.scala_xml_Equality$class__strict$und$bang$eq__Lscala_xml_Equality__Lscala_xml_Equality__Z(this, other)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_xml_Equality$class__hashCode__Lscala_xml_Equality__I(this)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.equals__O__Z = (function(other) {
  return ScalaJS.impls.scala_xml_Equality$class__equals__Lscala_xml_Equality__O__Z(this, other)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.xml$und$eq$eq__O__Z = (function(other) {
  return ScalaJS.impls.scala_xml_Equality$class__xml$und$eq$eq__Lscala_xml_Equality__O__Z(this, other)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.xml$und$bang$eq__O__Z = (function(other) {
  return ScalaJS.impls.scala_xml_Equality$class__xml$und$bang$eq__Lscala_xml_Equality__O__Z(this, other)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_immutable_Seq$class__companion__Lscala_collection_immutable_Seq__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.toSeq__Lscala_collection_immutable_Seq = (function() {
  return ScalaJS.impls.scala_collection_immutable_Seq$class__toSeq__Lscala_collection_immutable_Seq__Lscala_collection_immutable_Seq(this)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.seq__Lscala_collection_immutable_Seq = (function() {
  return ScalaJS.impls.scala_collection_immutable_Seq$class__seq__Lscala_collection_immutable_Seq__Lscala_collection_immutable_Seq(this)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_immutable_Seq$class__parCombiner__Lscala_collection_immutable_Seq__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.modules.scala_xml_NodeSeq().newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.length__I = (function() {
  return this.theSeq__Lscala_collection_Seq().length__I()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.theSeq__Lscala_collection_Seq().iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.apply__I__Lscala_xml_Node = (function(i) {
  return ScalaJS.as.scala_xml_Node(this.theSeq__Lscala_collection_Seq().apply__I__O(i))
});
ScalaJS.c.scala_xml_NodeSeq.prototype.apply__Lscala_Function1__Lscala_xml_NodeSeq = (function(f) {
  return ScalaJS.as.scala_xml_NodeSeq(this.filter__Lscala_Function1__O(f))
});
ScalaJS.c.scala_xml_NodeSeq.prototype.xml$undsameElements__Lscala_collection_Iterable__Z = (function(that) {
  var these = this.iterator__Lscala_collection_Iterator();
  var those = that.iterator__Lscala_collection_Iterator();
  while ((these.hasNext__Z() && those.hasNext__Z())) {
    if (ScalaJS.as.scala_xml_Equality(these.next__O()).xml$und$bang$eq__O__Z(those.next__O())) {
      return false
    }
  };
  return ((!these.hasNext__Z()) && (!those.hasNext__Z()))
});
ScalaJS.c.scala_xml_NodeSeq.prototype.basisForHashCode__Lscala_collection_Seq = (function() {
  return this.theSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.canEqual__O__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_xml_NodeSeq(x1)) {
    return true
  };
  return false
});
ScalaJS.c.scala_xml_NodeSeq.prototype.strict$und$eq$eq__Lscala_xml_Equality__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_xml_NodeSeq(x1)) {
    var x2 = ScalaJS.as.scala_xml_NodeSeq(x1);
    return ((this.length__I() === x2.length__I()) && this.theSeq__Lscala_collection_Seq().sameElements__Lscala_collection_GenIterable__Z(x2.theSeq__Lscala_collection_Seq()))
  };
  return false
});
ScalaJS.c.scala_xml_NodeSeq.prototype.$$bslash__T__Lscala_xml_NodeSeq = (function(that) {
  var x1 = that;
  if (ScalaJS.anyRefEqEq("", x1)) {
    return this.fail$1__p4__T__Lscala_Nothing(that)
  };
  if (ScalaJS.anyRefEqEq("_", x1)) {
    return this.makeSeq$1__p4__Lscala_Function1__Lscala_xml_NodeSeq(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(x$3) {
        return ScalaJS.bZ((!x$3.isAtom__Z()))
      })
    })()))
  };
  if (((ScalaJS.modules.scala_collection_immutable_StringOps().apply$extension__T__I__C(ScalaJS.modules.scala_Predef().augmentString__T__T(that), 0) === 64) && (this.length__I() === 1))) {
    return this.atResult$1__p4__T__Lscala_xml_NodeSeq(that)
  };
  return this.makeSeq$1__p4__Lscala_Function1__Lscala_xml_NodeSeq(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(that$1) {
    return (function(x$4) {
      return ScalaJS.bZ(ScalaJS.anyRefEqEq(x$4.label__T(), that$1))
    })
  })(that)))
});
ScalaJS.c.scala_xml_NodeSeq.prototype.$$bslash$bslash__T__Lscala_xml_NodeSeq = (function(that) {
  var x1 = that;
  if (ScalaJS.anyRefEqEq("_", x1)) {
    return this.filt$1__p4__Lscala_Function1__Lscala_xml_NodeSeq(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(x$6) {
        return ScalaJS.bZ((!x$6.isAtom__Z()))
      })
    })()))
  };
  if ((ScalaJS.modules.scala_collection_immutable_StringOps().apply$extension__T__I__C(ScalaJS.modules.scala_Predef().augmentString__T__T(that), 0) === 64)) {
    return ScalaJS.as.scala_xml_NodeSeq(this.filt$1__p4__Lscala_Function1__Lscala_xml_NodeSeq(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(x$7) {
        return ScalaJS.bZ((!x$7.isAtom__Z()))
      })
    })())).flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(that$2) {
      return (function(x$8) {
        return x$8.$$bslash__T__Lscala_xml_NodeSeq(that$2)
      })
    })(that)), ScalaJS.modules.scala_xml_NodeSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
  };
  return this.filt$1__p4__Lscala_Function1__Lscala_xml_NodeSeq(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(that$2) {
    return (function(x) {
      return ScalaJS.bZ(((!x.isAtom__Z()) && ScalaJS.anyRefEqEq(x.label__T(), that$2)))
    })
  })(that)))
});
ScalaJS.c.scala_xml_NodeSeq.prototype.toString__T = (function() {
  return this.theSeq__Lscala_collection_Seq().mkString__T()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.text__T = (function() {
  return ScalaJS.as.scala_collection_TraversableOnce(this.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$9) {
      return x$9.text__T()
    })
  })()), ScalaJS.modules.scala_collection_immutable_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).mkString__T()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_xml_NodeSeq.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.seq__Lscala_collection_immutable_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.seq__Lscala_collection_immutable_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.toSeq__Lscala_collection_Seq = (function() {
  return this.toSeq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.apply__O__O = (function(v1) {
  return this.apply__I__Lscala_xml_Node(ScalaJS.uI(v1))
});
ScalaJS.c.scala_xml_NodeSeq.prototype.apply__I__O = (function(idx) {
  return this.apply__I__Lscala_xml_Node(idx)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.fail$1__p4__T__Lscala_Nothing = (function(that$1) {
  throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T(that$1)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.y$lzycompute$1__p4__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__Lscala_xml_Node = (function(y$lzy$1, bitmap$0$1) {
  if (((bitmap$0$1.elem$1 & 1) === 0)) {
    y$lzy$1.elem$1 = this.apply__I__Lscala_xml_Node(0);
    bitmap$0$1.elem$1 = (bitmap$0$1.elem$1 | 1)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return ScalaJS.as.scala_xml_Node(y$lzy$1.elem$1)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.y$1__p4__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__Lscala_xml_Node = (function(y$lzy$1, bitmap$0$1) {
  if (((bitmap$0$1.elem$1 & 1) === 0)) {
    return this.y$lzycompute$1__p4__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__Lscala_xml_Node(y$lzy$1, bitmap$0$1)
  } else {
    return ScalaJS.as.scala_xml_Node(y$lzy$1.elem$1)
  }
});
ScalaJS.c.scala_xml_NodeSeq.prototype.atResult$1__p4__T__Lscala_xml_NodeSeq = (function(that$1) {
  var y$lzy = new ScalaJS.c.scala_runtime_ObjectRef().init___O(null);
  var bitmap$0 = new ScalaJS.c.scala_runtime_VolatileByteRef().init___B(0);
  if ((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(that$1) === 1)) {
    var attr = this.fail$1__p4__T__Lscala_Nothing(that$1)
  } else {
    if ((ScalaJS.modules.scala_collection_immutable_StringOps().apply$extension__T__I__C(ScalaJS.modules.scala_Predef().augmentString__T__T(that$1), 1) === 123)) {
      var i = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__I__I(that$1, 125);
      if ((i === -1)) {
        this.fail$1__p4__T__Lscala_Nothing(that$1)
      };
      var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(that$1, 2, i), ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(that$1, (i + 1), ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(that$1)));
      matchEnd3: {
        if ((x1 !== null)) {
          var uri = ScalaJS.as.java_lang_String(x1.$$und1__O());
          var key = ScalaJS.as.java_lang_String(x1.$$und2__O());
          var x$1 = new ScalaJS.c.scala_Tuple2().init___O__O(uri, key);
          break matchEnd3
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      };
      var uri$2 = ScalaJS.as.java_lang_String(x$1.$$und1__O());
      var key$2 = ScalaJS.as.java_lang_String(x$1.$$und2__O());
      if ((ScalaJS.anyRefEqEq(uri$2, "") || ScalaJS.anyRefEqEq(key$2, ""))) {
        var attr = this.fail$1__p4__T__Lscala_Nothing(that$1)
      } else {
        var attr = this.y$1__p4__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__Lscala_xml_Node(y$lzy, bitmap$0).attribute__T__T__Lscala_Option(uri$2, key$2)
      }
    } else {
      var attr = this.y$1__p4__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__Lscala_xml_Node(y$lzy, bitmap$0).attribute__T__Lscala_Option(ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(that$1)).drop__I__O(1)))
    }
  };
  var x1$2 = attr;
  if (ScalaJS.is.scala_Some(x1$2)) {
    var x2 = ScalaJS.as.scala_Some(x1$2);
    var x = ScalaJS.as.scala_collection_Seq(x2.x__O());
    return new ScalaJS.c.scala_xml_Group().init___Lscala_collection_Seq(x)
  };
  return ScalaJS.modules.scala_xml_NodeSeq().Empty__Lscala_xml_NodeSeq()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.makeSeq$1__p4__Lscala_Function1__Lscala_xml_NodeSeq = (function(cond) {
  return ScalaJS.modules.scala_xml_NodeSeq().fromSeq__Lscala_collection_Seq__Lscala_xml_NodeSeq(ScalaJS.as.scala_collection_Seq(ScalaJS.as.scala_collection_TraversableLike(this.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$2) {
      return x$2.child__Lscala_collection_Seq()
    })
  })()), ScalaJS.modules.scala_xml_NodeSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).filter__Lscala_Function1__O(cond)))
});
ScalaJS.c.scala_xml_NodeSeq.prototype.filt$1__p4__Lscala_Function1__Lscala_xml_NodeSeq = (function(cond) {
  return ScalaJS.as.scala_xml_NodeSeq(ScalaJS.as.scala_collection_TraversableLike(this.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$5) {
      return x$5.descendant$undor$undself__Lscala_collection_immutable_List()
    })
  })()), ScalaJS.modules.scala_xml_NodeSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).filter__Lscala_Function1__O(cond))
});
ScalaJS.c.scala_xml_NodeSeq.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_immutable_Traversable$class__$init$__Lscala_collection_immutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_immutable_Iterable$class__$init$__Lscala_collection_immutable_Iterable__V(this);
  ScalaJS.impls.scala_collection_immutable_Seq$class__$init$__Lscala_collection_immutable_Seq__V(this);
  ScalaJS.impls.scala_xml_Equality$class__$init$__Lscala_xml_Equality__V(this);
  return this
});
ScalaJS.c.scala_xml_NodeSeq.prototype.xml$und$bang$eq__O__ = (function(other) {
  return ScalaJS.bZ(this.xml$und$bang$eq__O__Z(other))
});
ScalaJS.c.scala_xml_NodeSeq.prototype.xml$und$eq$eq__O__ = (function(other$2) {
  return ScalaJS.bZ(this.xml$und$eq$eq__O__Z(other$2))
});
ScalaJS.c.scala_xml_NodeSeq.prototype.strict$und$bang$eq__Lscala_xml_Equality__ = (function(other$3) {
  return ScalaJS.bZ(this.strict$und$bang$eq__Lscala_xml_Equality__Z(other$3))
});
ScalaJS.c.scala_xml_NodeSeq.prototype.text__ = (function() {
  return this.text__T()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.$$bslash$bslash__T__ = (function(that) {
  return this.$$bslash$bslash__T__Lscala_xml_NodeSeq(that)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.$$bslash__T__ = (function(that$2) {
  return this.$$bslash__T__Lscala_xml_NodeSeq(that$2)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.strict$und$eq$eq__Lscala_xml_Equality__ = (function(other$4) {
  return ScalaJS.bZ(this.strict$und$eq$eq__Lscala_xml_Equality__Z(other$4))
});
ScalaJS.c.scala_xml_NodeSeq.prototype.basisForHashCode__ = (function() {
  return this.basisForHashCode__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_NodeSeq.prototype.xml$undsameElements__Lscala_collection_Iterable__ = (function(that$3) {
  return ScalaJS.bZ(this.xml$undsameElements__Lscala_collection_Iterable__Z(that$3))
});
ScalaJS.c.scala_xml_NodeSeq.prototype.apply__Lscala_Function1__ = (function(f) {
  return this.apply__Lscala_Function1__Lscala_xml_NodeSeq(f)
});
ScalaJS.c.scala_xml_NodeSeq.prototype.theSeq__ = (function() {
  return this.theSeq__Lscala_collection_Seq()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_NodeSeq = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_NodeSeq.prototype = ScalaJS.c.scala_xml_NodeSeq.prototype;
ScalaJS.is.scala_xml_NodeSeq = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_NodeSeq)))
});
ScalaJS.as.scala_xml_NodeSeq = (function(obj) {
  if ((ScalaJS.is.scala_xml_NodeSeq(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.NodeSeq")
  }
});
ScalaJS.isArrayOf.scala_xml_NodeSeq = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_NodeSeq)))
});
ScalaJS.asArrayOf.scala_xml_NodeSeq = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_NodeSeq(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.NodeSeq;", depth)
  }
});
ScalaJS.data.scala_xml_NodeSeq = new ScalaJS.ClassTypeData({
  scala_xml_NodeSeq: 0
}, false, "scala.xml.NodeSeq", ScalaJS.data.scala_collection_AbstractSeq, {
  scala_xml_NodeSeq: 1,
  scala_xml_Equality: 1,
  scala_collection_immutable_Seq: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
  scala_collection_AbstractSeq: 1,
  scala_collection_Seq: 1,
  scala_collection_SeqLike: 1,
  scala_collection_GenSeq: 1,
  scala_collection_GenSeqLike: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_AbstractIterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_AbstractTraversable: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_NodeSeq.prototype.$classData = ScalaJS.data.scala_xml_NodeSeq;
//@ sourceMappingURL=NodeSeq.js.map

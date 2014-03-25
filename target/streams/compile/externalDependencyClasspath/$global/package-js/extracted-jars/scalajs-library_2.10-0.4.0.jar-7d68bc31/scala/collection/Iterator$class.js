ScalaJS.impls.scala_collection_Iterator$class__seq__Lscala_collection_Iterator__Lscala_collection_Iterator = (function($$this) {
  return $$this
});
ScalaJS.impls.scala_collection_Iterator$class__isEmpty__Lscala_collection_Iterator__Z = (function($$this) {
  return (!$$this.hasNext__Z())
});
ScalaJS.impls.scala_collection_Iterator$class__isTraversableAgain__Lscala_collection_Iterator__Z = (function($$this) {
  return false
});
ScalaJS.impls.scala_collection_Iterator$class__hasDefiniteSize__Lscala_collection_Iterator__Z = (function($$this) {
  return $$this.isEmpty__Z()
});
ScalaJS.impls.scala_collection_Iterator$class__take__Lscala_collection_Iterator__I__Lscala_collection_Iterator = (function($$this, n) {
  return $$this.slice__I__I__Lscala_collection_Iterator(0, n)
});
ScalaJS.impls.scala_collection_Iterator$class__drop__Lscala_collection_Iterator__I__Lscala_collection_Iterator = (function($$this, n) {
  return $$this.slice__I__I__Lscala_collection_Iterator(n, 2147483647)
});
ScalaJS.impls.scala_collection_Iterator$class__slice__Lscala_collection_Iterator__I__I__Lscala_collection_Iterator = (function($$this, from, until) {
  var lo = ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(from), 0);
  var toDrop = lo;
  while (((toDrop > 0) && $$this.hasNext__Z())) {
    $$this.next__O();
    toDrop = (toDrop - 1)
  };
  return new ScalaJS.c.scala_collection_Iterator$$anon$10().init___Lscala_collection_Iterator__I__I($$this, lo, until)
});
ScalaJS.impls.scala_collection_Iterator$class__map__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator = (function($$this, f) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$11().init___Lscala_collection_Iterator__Lscala_Function1($$this, f)
});
ScalaJS.impls.scala_collection_Iterator$class__$plus$plus__Lscala_collection_Iterator__Lscala_Function0__Lscala_collection_Iterator = (function($$this, that) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$12().init___Lscala_collection_Iterator__Lscala_Function0($$this, that)
});
ScalaJS.impls.scala_collection_Iterator$class__flatMap__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator = (function($$this, f) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$13().init___Lscala_collection_Iterator__Lscala_Function1($$this, f)
});
ScalaJS.impls.scala_collection_Iterator$class__filter__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator = (function($$this, p) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$14().init___Lscala_collection_Iterator__Lscala_Function1($$this, p)
});
ScalaJS.impls.scala_collection_Iterator$class__corresponds__Lscala_collection_Iterator__Lscala_collection_GenTraversableOnce__Lscala_Function2__Z = (function($$this, that, p) {
  var that0 = that.toIterator__Lscala_collection_Iterator();
  while (($$this.hasNext__Z() && that0.hasNext__Z())) {
    if ((!ScalaJS.uZ(p.apply__O__O__O($$this.next__O(), that0.next__O())))) {
      return false
    }
  };
  return ($$this.hasNext__Z() === that0.hasNext__Z())
});
ScalaJS.impls.scala_collection_Iterator$class__withFilter__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator = (function($$this, p) {
  return $$this.filter__Lscala_Function1__Lscala_collection_Iterator(p)
});
ScalaJS.impls.scala_collection_Iterator$class__filterNot__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator = (function($$this, p) {
  return $$this.filter__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$2) {
    return (function(x$1) {
      return ScalaJS.bZ((!ScalaJS.uZ(p$2.apply__O__O(x$1))))
    })
  })(p)))
});
ScalaJS.impls.scala_collection_Iterator$class__collect__Lscala_collection_Iterator__Lscala_PartialFunction__Lscala_collection_Iterator = (function($$this, pf) {
  var self = $$this.buffered__Lscala_collection_BufferedIterator();
  return new ScalaJS.c.scala_collection_Iterator$$anon$15().init___Lscala_collection_Iterator__Lscala_collection_BufferedIterator__Lscala_PartialFunction($$this, self, pf)
});
ScalaJS.impls.scala_collection_Iterator$class__scanLeft__Lscala_collection_Iterator__O__Lscala_Function2__Lscala_collection_Iterator = (function($$this, z, op) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$16().init___Lscala_collection_Iterator__O__Lscala_Function2($$this, z, op)
});
ScalaJS.impls.scala_collection_Iterator$class__scanRight__Lscala_collection_Iterator__O__Lscala_Function2__Lscala_collection_Iterator = (function($$this, z, op) {
  return ScalaJS.as.scala_collection_IterableLike($$this.toBuffer__Lscala_collection_mutable_Buffer().scanRight__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(z, op, ScalaJS.modules.scala_collection_mutable_Buffer().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).iterator__Lscala_collection_Iterator()
});
ScalaJS.impls.scala_collection_Iterator$class__takeWhile__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator = (function($$this, p) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$17().init___Lscala_collection_Iterator__Lscala_Function1($$this, p)
});
ScalaJS.impls.scala_collection_Iterator$class__partition__Lscala_collection_Iterator__Lscala_Function1__Lscala_Tuple2 = (function($$this, p) {
  var self = $$this.buffered__Lscala_collection_BufferedIterator();
  var l = new ScalaJS.c.scala_collection_Iterator$PartitionIterator$1().init___Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_BufferedIterator($$this, p, self);
  var r = new ScalaJS.c.scala_collection_Iterator$PartitionIterator$1().init___Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_BufferedIterator($$this, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$4) {
    return (function(x$2) {
      return ScalaJS.bZ((!ScalaJS.uZ(p$4.apply__O__O(x$2))))
    })
  })(p)), self);
  l.other$und$eq__Lscala_collection_Iterator$PartitionIterator$1__V(r);
  r.other$und$eq__Lscala_collection_Iterator$PartitionIterator$1__V(l);
  return new ScalaJS.c.scala_Tuple2().init___O__O(l, r)
});
ScalaJS.impls.scala_collection_Iterator$class__span__Lscala_collection_Iterator__Lscala_Function1__Lscala_Tuple2 = (function($$this, p) {
  var self = $$this.buffered__Lscala_collection_BufferedIterator();
  var leading = new ScalaJS.c.scala_collection_Iterator$Leading$1().init___Lscala_collection_Iterator__Lscala_collection_BufferedIterator__Lscala_Function1($$this, self, p);
  var trailing = new ScalaJS.c.scala_collection_Iterator$$anon$18().init___Lscala_collection_Iterator__Lscala_collection_BufferedIterator__Lscala_collection_Iterator$Leading$1($$this, self, leading);
  return new ScalaJS.c.scala_Tuple2().init___O__O(leading, trailing)
});
ScalaJS.impls.scala_collection_Iterator$class__dropWhile__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator = (function($$this, p) {
  var self = $$this.buffered__Lscala_collection_BufferedIterator();
  return new ScalaJS.c.scala_collection_Iterator$$anon$19().init___Lscala_collection_Iterator__Lscala_collection_BufferedIterator__Lscala_Function1($$this, self, p)
});
ScalaJS.impls.scala_collection_Iterator$class__zip__Lscala_collection_Iterator__Lscala_collection_Iterator__Lscala_collection_Iterator = (function($$this, that) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$20().init___Lscala_collection_Iterator__Lscala_collection_Iterator($$this, that)
});
ScalaJS.impls.scala_collection_Iterator$class__padTo__Lscala_collection_Iterator__I__O__Lscala_collection_Iterator = (function($$this, len, elem) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$21().init___Lscala_collection_Iterator__I__O($$this, len, elem)
});
ScalaJS.impls.scala_collection_Iterator$class__zipWithIndex__Lscala_collection_Iterator__Lscala_collection_Iterator = (function($$this) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$22().init___Lscala_collection_Iterator($$this)
});
ScalaJS.impls.scala_collection_Iterator$class__zipAll__Lscala_collection_Iterator__Lscala_collection_Iterator__O__O__Lscala_collection_Iterator = (function($$this, that, thisElem, thatElem) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$23().init___Lscala_collection_Iterator__Lscala_collection_Iterator__O__O($$this, that, thisElem, thatElem)
});
ScalaJS.impls.scala_collection_Iterator$class__foreach__Lscala_collection_Iterator__Lscala_Function1__V = (function($$this, f) {
  while ($$this.hasNext__Z()) {
    f.apply__O__O($$this.next__O())
  }
});
ScalaJS.impls.scala_collection_Iterator$class__forall__Lscala_collection_Iterator__Lscala_Function1__Z = (function($$this, p) {
  var res = true;
  while ((res && $$this.hasNext__Z())) {
    res = ScalaJS.uZ(p.apply__O__O($$this.next__O()))
  };
  return res
});
ScalaJS.impls.scala_collection_Iterator$class__exists__Lscala_collection_Iterator__Lscala_Function1__Z = (function($$this, p) {
  var res = false;
  while (((!res) && $$this.hasNext__Z())) {
    res = ScalaJS.uZ(p.apply__O__O($$this.next__O()))
  };
  return res
});
ScalaJS.impls.scala_collection_Iterator$class__contains__Lscala_collection_Iterator__O__Z = (function($$this, elem) {
  return $$this.exists__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(elem$5) {
    return (function(x$3) {
      return ScalaJS.bZ(ScalaJS.anyEqEq(x$3, elem$5))
    })
  })(elem)))
});
ScalaJS.impls.scala_collection_Iterator$class__find__Lscala_collection_Iterator__Lscala_Function1__Lscala_Option = (function($$this, p) {
  var res = ScalaJS.modules.scala_None();
  while ((res.isEmpty__Z() && $$this.hasNext__Z())) {
    var e = $$this.next__O();
    if (ScalaJS.uZ(p.apply__O__O(e))) {
      res = new ScalaJS.c.scala_Some().init___O(e)
    }
  };
  return res
});
ScalaJS.impls.scala_collection_Iterator$class__indexWhere__Lscala_collection_Iterator__Lscala_Function1__I = (function($$this, p) {
  var i = 0;
  var found = false;
  while (((!found) && $$this.hasNext__Z())) {
    if (ScalaJS.uZ(p.apply__O__O($$this.next__O()))) {
      found = true
    } else {
      i = (i + 1)
    }
  };
  if (found) {
    return i
  } else {
    return -1
  }
});
ScalaJS.impls.scala_collection_Iterator$class__indexOf__Lscala_collection_Iterator__O__I = (function($$this, elem) {
  var i = 0;
  var found = false;
  while (((!found) && $$this.hasNext__Z())) {
    if (ScalaJS.anyEqEq($$this.next__O(), elem)) {
      found = true
    } else {
      i = (i + 1)
    }
  };
  if (found) {
    return i
  } else {
    return -1
  }
});
ScalaJS.impls.scala_collection_Iterator$class__buffered__Lscala_collection_Iterator__Lscala_collection_BufferedIterator = (function($$this) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$1().init___Lscala_collection_Iterator($$this)
});
ScalaJS.impls.scala_collection_Iterator$class__grouped__Lscala_collection_Iterator__I__Lscala_collection_Iterator$GroupedIterator = (function($$this, size) {
  return new ScalaJS.c.scala_collection_Iterator$GroupedIterator().init___Lscala_collection_Iterator__Lscala_collection_Iterator__I__I($$this, $$this, size, size)
});
ScalaJS.impls.scala_collection_Iterator$class__sliding__Lscala_collection_Iterator__I__I__Lscala_collection_Iterator$GroupedIterator = (function($$this, size, step) {
  return new ScalaJS.c.scala_collection_Iterator$GroupedIterator().init___Lscala_collection_Iterator__Lscala_collection_Iterator__I__I($$this, $$this, size, step)
});
ScalaJS.impls.scala_collection_Iterator$class__sliding$default$2__Lscala_collection_Iterator__I = (function($$this) {
  return 1
});
ScalaJS.impls.scala_collection_Iterator$class__length__Lscala_collection_Iterator__I = (function($$this) {
  return $$this.size__I()
});
ScalaJS.impls.scala_collection_Iterator$class__duplicate__Lscala_collection_Iterator__Lscala_Tuple2 = (function($$this) {
  var gap = new ScalaJS.c.scala_collection_mutable_Queue().init___();
  var ahead = new ScalaJS.c.scala_runtime_ObjectRef().init___O(null);
  return new ScalaJS.c.scala_Tuple2().init___O__O(new ScalaJS.c.scala_collection_Iterator$Partner$1().init___Lscala_collection_Iterator__Lscala_collection_mutable_Queue__Lscala_runtime_ObjectRef($$this, gap, ahead), new ScalaJS.c.scala_collection_Iterator$Partner$1().init___Lscala_collection_Iterator__Lscala_collection_mutable_Queue__Lscala_runtime_ObjectRef($$this, gap, ahead))
});
ScalaJS.impls.scala_collection_Iterator$class__patch__Lscala_collection_Iterator__I__Lscala_collection_Iterator__I__Lscala_collection_Iterator = (function($$this, from, patchElems, replaced) {
  return new ScalaJS.c.scala_collection_Iterator$$anon$24().init___Lscala_collection_Iterator__I__Lscala_collection_Iterator__I($$this, from, patchElems, replaced)
});
ScalaJS.impls.scala_collection_Iterator$class__copyToArray__Lscala_collection_Iterator__O__I__I__V = (function($$this, xs, start, len) {
  ScalaJS.modules.scala_Predef().require__Z__Lscala_Function0__V(((start >= 0) && ((start < ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(xs)) || (ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(xs) === 0))), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(xs$2, start$4) {
    return (function() {
      return new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["start ", " out of range ", ""]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bI(start$4), ScalaJS.bI(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(xs$2))])))
    })
  })(xs, start)));
  var i = start;
  var end = (start + ScalaJS.modules.scala_math_package().min__I__I__I(len, (ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(xs) - start)));
  while (((i < end) && $$this.hasNext__Z())) {
    ScalaJS.modules.scala_runtime_ScalaRunTime().array$undupdate__O__I__O__V(xs, i, $$this.next__O());
    i = (i + 1)
  }
});
ScalaJS.impls.scala_collection_Iterator$class__sameElements__Lscala_collection_Iterator__Lscala_collection_Iterator__Z = (function($$this, that) {
  while (($$this.hasNext__Z() && that.hasNext__Z())) {
    if ((!ScalaJS.anyEqEq($$this.next__O(), that.next__O()))) {
      return false
    }
  };
  return ((!$$this.hasNext__Z()) && (!that.hasNext__Z()))
});
ScalaJS.impls.scala_collection_Iterator$class__toTraversable__Lscala_collection_Iterator__Lscala_collection_Traversable = (function($$this) {
  return $$this.toStream__Lscala_collection_immutable_Stream()
});
ScalaJS.impls.scala_collection_Iterator$class__toIterator__Lscala_collection_Iterator__Lscala_collection_Iterator = (function($$this) {
  return $$this
});
ScalaJS.impls.scala_collection_Iterator$class__toStream__Lscala_collection_Iterator__Lscala_collection_immutable_Stream = (function($$this) {
  if ($$this.hasNext__Z()) {
    return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons($$this.next__O(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
      return (function() {
        return arg$outer.toStream__Lscala_collection_immutable_Stream()
      })
    })($$this)))
  } else {
    return ScalaJS.modules.scala_collection_immutable_Stream().empty__Lscala_collection_immutable_Stream()
  }
});
ScalaJS.impls.scala_collection_Iterator$class__toString__Lscala_collection_Iterator__T = (function($$this) {
  if ($$this.hasNext__Z()) {
    var jsx$2 = "non-empty"
  } else {
    var jsx$2 = "empty"
  };
  var jsx$1 = ("" + jsx$2);
  return (jsx$1 + " iterator")
});
ScalaJS.impls.scala_collection_Iterator$class__$init$__Lscala_collection_Iterator__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=Iterator$class.js.map

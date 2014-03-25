/** @constructor */
ScalaJS.c.scala_collection_SeqLike$CombinationsItr = (function() {
  ScalaJS.c.scala_collection_AbstractIterator.call(this);
  this.n$2 = 0;
  this.x$4$2 = null;
  this.scala$collection$SeqLike$CombinationsItr$$elms$2 = null;
  this.scala$collection$SeqLike$CombinationsItr$$cnts$2 = null;
  this.scala$collection$SeqLike$CombinationsItr$$nums$2 = null;
  this.scala$collection$SeqLike$CombinationsItr$$offs$2 = null;
  this.$$undhasNext$2 = false;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterator();
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype.constructor = ScalaJS.c.scala_collection_SeqLike$CombinationsItr;
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype.scala$collection$SeqLike$CombinationsItr$$elms__Lscala_collection_IndexedSeq = (function() {
  return this.scala$collection$SeqLike$CombinationsItr$$elms$2
});
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype.scala$collection$SeqLike$CombinationsItr$$cnts__AI = (function() {
  return this.scala$collection$SeqLike$CombinationsItr$$cnts$2
});
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype.scala$collection$SeqLike$CombinationsItr$$nums__AI = (function() {
  return this.scala$collection$SeqLike$CombinationsItr$$nums$2
});
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype.scala$collection$SeqLike$CombinationsItr$$offs__AI = (function() {
  return this.scala$collection$SeqLike$CombinationsItr$$offs$2
});
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype.$$undhasNext__p2__Z = (function() {
  return this.$$undhasNext$2
});
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype.$$undhasNext$und$eq__p2__Z__V = (function(x$1) {
  this.$$undhasNext$2 = x$1
});
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype.hasNext__Z = (function() {
  return this.$$undhasNext__p2__Z()
});
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype.next__O = (function() {
  if ((!this.hasNext__Z())) {
    ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O()
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  var buf = this.scala$collection$SeqLike$CombinationsItr$$$outer__Lscala_collection_SeqLike().newBuilder__Lscala_collection_mutable_Builder();
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), this.scala$collection$SeqLike$CombinationsItr$$nums__AI().underlying.length).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_collection_SeqLike$CombinationsItr$$anonfun$next$1().init___Lscala_collection_SeqLike$CombinationsItr__Lscala_collection_mutable_Builder(this, buf));
  var res = buf.result__O();
  var idx = (this.scala$collection$SeqLike$CombinationsItr$$nums__AI().underlying.length - 1);
  while (((idx >= 0) && (this.scala$collection$SeqLike$CombinationsItr$$nums__AI().underlying[idx] === this.scala$collection$SeqLike$CombinationsItr$$cnts__AI().underlying[idx]))) {
    idx = (idx - 1)
  };
  idx = ScalaJS.modules.scala_Predef().intArrayOps__AI__Lscala_collection_mutable_ArrayOps(this.scala$collection$SeqLike$CombinationsItr$$nums__AI()).lastIndexWhere__Lscala_Function1__I__I(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$7) {
      x$7 = ScalaJS.uI(x$7);
      return ScalaJS.bZ((x$7 > 0))
    })
  })()), (idx - 1));
  if ((idx < 0)) {
    this.$$undhasNext$und$eq__p2__Z__V(false)
  } else {
    var sum = new ScalaJS.c.scala_runtime_IntRef().init___I((ScalaJS.uI(ScalaJS.modules.scala_Predef().intArrayOps__AI__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.scala_Int(ScalaJS.modules.scala_Predef().intArrayOps__AI__Lscala_collection_mutable_ArrayOps(this.scala$collection$SeqLike$CombinationsItr$$nums__AI()).slice__I__I__O((idx + 1), this.scala$collection$SeqLike$CombinationsItr$$nums__AI().underlying.length), 1)).sum__Lscala_math_Numeric__O(ScalaJS.modules.scala_math_Numeric$IntIsIntegral())) + 1));
    var ev$1 = idx;
    this.scala$collection$SeqLike$CombinationsItr$$nums__AI().underlying[ev$1] = (this.scala$collection$SeqLike$CombinationsItr$$nums__AI().underlying[ev$1] - 1);
    ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I((idx + 1)), this.scala$collection$SeqLike$CombinationsItr$$nums__AI().underlying.length).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, sum$1) {
      return (function(k) {
        k = ScalaJS.uI(k);
        arg$outer.scala$collection$SeqLike$CombinationsItr$$nums__AI().underlying[k] = ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(sum$1.elem$1), arg$outer.scala$collection$SeqLike$CombinationsItr$$cnts__AI().underlying[k]);
        sum$1.elem$1 = (sum$1.elem$1 - arg$outer.scala$collection$SeqLike$CombinationsItr$$nums__AI().underlying[k]);
        return ScalaJS.bV(undefined)
      })
    })(this, sum)))
  };
  return res
});
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype.init__p2__Lscala_Tuple3 = (function() {
  var m = ScalaJS.as.scala_collection_mutable_HashMap(ScalaJS.modules.scala_collection_mutable_HashMap().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_collection_immutable_Nil()));
  var x1 = ScalaJS.as.scala_collection_generic_GenericTraversableTemplate(ScalaJS.as.scala_collection_SeqLike(this.scala$collection$SeqLike$CombinationsItr$$$outer__Lscala_collection_SeqLike().thisCollection__Lscala_collection_Seq().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_collection_SeqLike$CombinationsItr$$anonfun$4().init___Lscala_collection_SeqLike$CombinationsItr__Lscala_collection_mutable_HashMap(this, m), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).sortBy__Lscala_Function1__Lscala_math_Ordering__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$8) {
      return ScalaJS.bI(x$8.$$und2$mcI$sp__I())
    })
  })()), ScalaJS.modules.scala_math_Ordering$Int())).unzip__Lscala_Function1__Lscala_Tuple2(ScalaJS.modules.scala_Predef().conforms__Lscala_Predef$$less$colon$less());
  matchEnd3: {
    if ((x1 !== null)) {
      var es = ScalaJS.as.scala_collection_Seq(x1.$$und1__O());
      var is = ScalaJS.as.scala_collection_Seq(x1.$$und2__O());
      var x$9 = new ScalaJS.c.scala_Tuple2().init___O__O(es, is);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var es$2 = ScalaJS.as.scala_collection_Seq(x$9.$$und1__O());
  var is$2 = ScalaJS.as.scala_collection_Seq(x$9.$$und2__O());
  var cs = ScalaJS.newArrayObject(ScalaJS.data.scala_Int.getArrayOf(), [m.size__I()]);
  is$2.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(cs$1) {
    return (function(i) {
      i = ScalaJS.uI(i);
      cs$1.underlying[i] = (cs$1.underlying[i] + 1);
      return ScalaJS.bV(undefined)
    })
  })(cs)));
  var ns = ScalaJS.newArrayObject(ScalaJS.data.scala_Int.getArrayOf(), [cs.underlying.length]);
  var r = new ScalaJS.c.scala_runtime_IntRef().init___I(this.n$2);
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), ns.underlying.length).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(cs$1, ns$1, r$1) {
    return (function(k) {
      k = ScalaJS.uI(k);
      ns$1.underlying[k] = ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(r$1.elem$1), cs$1.underlying[k]);
      r$1.elem$1 = (r$1.elem$1 - ns$1.underlying[k]);
      return ScalaJS.bV(undefined)
    })
  })(cs, ns, r)));
  return new ScalaJS.c.scala_Tuple3().init___O__O__O(es$2.toIndexedSeq__Lscala_collection_immutable_IndexedSeq(), cs, ns)
});
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype.scala$collection$SeqLike$CombinationsItr$$$outer__Lscala_collection_SeqLike = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype.init___Lscala_collection_SeqLike__I = (function($$outer, n) {
  this.n$2 = n;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterator.prototype.init___.call(this);
  var x1 = this.init__p2__Lscala_Tuple3();
  matchEnd3: {
    if ((x1 !== null)) {
      var elms = ScalaJS.as.scala_collection_IndexedSeq(x1.$$und1__O());
      var cnts = ScalaJS.asArrayOf.scala_Int(x1.$$und2__O(), 1);
      var nums = ScalaJS.asArrayOf.scala_Int(x1.$$und3__O(), 1);
      var jsx$1 = new ScalaJS.c.scala_Tuple3().init___O__O__O(elms, cnts, nums);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  this.x$4$2 = jsx$1;
  this.scala$collection$SeqLike$CombinationsItr$$elms$2 = ScalaJS.as.scala_collection_IndexedSeq(this.x$4$2.$$und1__O());
  this.scala$collection$SeqLike$CombinationsItr$$cnts$2 = ScalaJS.asArrayOf.scala_Int(this.x$4$2.$$und2__O(), 1);
  this.scala$collection$SeqLike$CombinationsItr$$nums$2 = ScalaJS.asArrayOf.scala_Int(this.x$4$2.$$und3__O(), 1);
  this.scala$collection$SeqLike$CombinationsItr$$offs$2 = ScalaJS.asArrayOf.scala_Int(ScalaJS.modules.scala_Predef().intArrayOps__AI__Lscala_collection_mutable_ArrayOps(this.scala$collection$SeqLike$CombinationsItr$$cnts__AI()).scanLeft__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.bI(0), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(x$5, x$6) {
      x$5 = ScalaJS.uI(x$5);
      x$6 = ScalaJS.uI(x$6);
      return ScalaJS.bI((x$5 + x$6))
    })
  })()), ScalaJS.modules.scala_Array().canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_reflect_ClassTag().Int__Lscala_reflect_ClassTag())), 1);
  this.$$undhasNext$2 = true;
  return this
});
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype.scala$collection$SeqLike$CombinationsItr$$$outer__ = (function() {
  return this.scala$collection$SeqLike$CombinationsItr$$$outer__Lscala_collection_SeqLike()
});
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype.scala$collection$SeqLike$CombinationsItr$$offs__ = (function() {
  return this.scala$collection$SeqLike$CombinationsItr$$offs__AI()
});
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype.scala$collection$SeqLike$CombinationsItr$$nums__ = (function() {
  return this.scala$collection$SeqLike$CombinationsItr$$nums__AI()
});
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype.scala$collection$SeqLike$CombinationsItr$$cnts__ = (function() {
  return this.scala$collection$SeqLike$CombinationsItr$$cnts__AI()
});
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype.scala$collection$SeqLike$CombinationsItr$$elms__ = (function() {
  return this.scala$collection$SeqLike$CombinationsItr$$elms__Lscala_collection_IndexedSeq()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_SeqLike$CombinationsItr = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_SeqLike$CombinationsItr.prototype = ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype;
ScalaJS.is.scala_collection_SeqLike$CombinationsItr = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SeqLike$CombinationsItr)))
});
ScalaJS.as.scala_collection_SeqLike$CombinationsItr = (function(obj) {
  if ((ScalaJS.is.scala_collection_SeqLike$CombinationsItr(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SeqLike$CombinationsItr")
  }
});
ScalaJS.isArrayOf.scala_collection_SeqLike$CombinationsItr = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SeqLike$CombinationsItr)))
});
ScalaJS.asArrayOf.scala_collection_SeqLike$CombinationsItr = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SeqLike$CombinationsItr(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SeqLike$CombinationsItr;", depth)
  }
});
ScalaJS.data.scala_collection_SeqLike$CombinationsItr = new ScalaJS.ClassTypeData({
  scala_collection_SeqLike$CombinationsItr: 0
}, false, "scala.collection.SeqLike$CombinationsItr", ScalaJS.data.scala_collection_AbstractIterator, {
  scala_collection_SeqLike$CombinationsItr: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_SeqLike$CombinationsItr.prototype.$classData = ScalaJS.data.scala_collection_SeqLike$CombinationsItr;
//@ sourceMappingURL=SeqLike$CombinationsItr.js.map

/** @constructor */
ScalaJS.c.scala_collection_immutable_List$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this)
});
ScalaJS.c.scala_collection_immutable_List$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_immutable_List$.prototype.constructor = ScalaJS.c.scala_collection_immutable_List$;
ScalaJS.c.scala_collection_immutable_List$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_immutable_List$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_ListBuffer().init___()
});
ScalaJS.c.scala_collection_immutable_List$.prototype.empty__Lscala_collection_immutable_List = (function() {
  return ScalaJS.modules.scala_collection_immutable_Nil()
});
ScalaJS.c.scala_collection_immutable_List$.prototype.apply__Lscala_collection_Seq__Lscala_collection_immutable_List = (function(xs) {
  return xs.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_List$.prototype.range__I__I__Lscala_Function1__Lscala_collection_immutable_List = (function(start, end, step) {
  var up = (step.apply$mcII$sp__I__I(start) > start);
  var down = (step.apply$mcII$sp__I__I(start) < start);
  var b = new ScalaJS.c.scala_collection_mutable_ListBuffer().init___();
  var i = start;
  while ((((!up) || (i < end)) && ((!down) || (i > end)))) {
    b.$$plus$eq__O__Lscala_collection_mutable_ListBuffer(ScalaJS.bI(i));
    var next = step.apply$mcII$sp__I__I(i);
    if ((i === next)) {
      throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T(("the step function did not make any progress on " + ScalaJS.bI(i)))
    };
    i = next
  };
  return b.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_List$.prototype.make__I__O__Lscala_collection_immutable_List = (function(n, elem) {
  var b = new ScalaJS.c.scala_collection_mutable_ListBuffer().init___();
  var i = 0;
  while ((i < n)) {
    b.$$plus$eq__O__Lscala_collection_mutable_ListBuffer(elem);
    i = (i + 1)
  };
  return b.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_List$.prototype.flatten__Lscala_collection_immutable_List__Lscala_collection_immutable_List = (function(xss) {
  var b = new ScalaJS.c.scala_collection_mutable_ListBuffer().init___();
  xss.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$1) {
    return (function(xs) {
      var xc = xs;
      while ((!xc.isEmpty__Z())) {
        b$1.$$plus$eq__O__Lscala_collection_mutable_ListBuffer(xc.head__O());
        xc = ScalaJS.as.scala_collection_immutable_List(xc.tail__O())
      };
      return ScalaJS.bV(undefined)
    })
  })(b)));
  return b.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_List$.prototype.unzip__Lscala_collection_immutable_List__Lscala_Tuple2 = (function(xs) {
  var b1 = new ScalaJS.c.scala_collection_mutable_ListBuffer().init___();
  var b2 = new ScalaJS.c.scala_collection_mutable_ListBuffer().init___();
  var xc = xs;
  while ((!xc.isEmpty__Z())) {
    b1.$$plus$eq__O__Lscala_collection_mutable_ListBuffer(ScalaJS.as.scala_Tuple2(xc.head__O()).$$und1__O());
    b2.$$plus$eq__O__Lscala_collection_mutable_ListBuffer(ScalaJS.as.scala_Tuple2(xc.head__O()).$$und2__O());
    xc = ScalaJS.as.scala_collection_immutable_List(xc.tail__O())
  };
  return new ScalaJS.c.scala_Tuple2().init___O__O(b1.toList__Lscala_collection_immutable_List(), b2.toList__Lscala_collection_immutable_List())
});
ScalaJS.c.scala_collection_immutable_List$.prototype.unzip__Lscala_collection_Iterable__Lscala_Tuple2 = (function(xs) {
  return ScalaJS.as.scala_Tuple2(xs.foldRight__O__Lscala_Function2__O(new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.modules.scala_collection_immutable_Nil(), ScalaJS.modules.scala_collection_immutable_Nil()), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(x0$1, x1$1) {
      var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(x0$1, x1$1);
      if ((x1 !== null)) {
        var p2 = ScalaJS.as.scala_Tuple2(x1.$$und1__O());
        var p3 = ScalaJS.as.scala_Tuple2(x1.$$und2__O());
        if ((p2 !== null)) {
          var x = p2.$$und1__O();
          var y = p2.$$und2__O();
          if ((p3 !== null)) {
            var xs = ScalaJS.as.scala_collection_immutable_List(p3.$$und1__O());
            var ys = ScalaJS.as.scala_collection_immutable_List(p3.$$und2__O());
            var jsx$3 = new ScalaJS.c.scala_Tuple2();
            var x$5 = x;
            var jsx$2 = xs.$$colon$colon__O__Lscala_collection_immutable_List(x$5);
            var x$6 = y;
            var jsx$1 = ys.$$colon$colon__O__Lscala_collection_immutable_List(x$6);
            return jsx$3.init___O__O(jsx$2, jsx$1)
          }
        }
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })())))
});
ScalaJS.c.scala_collection_immutable_List$.prototype.lefts__Lscala_collection_Iterable__Lscala_collection_immutable_List = (function(es) {
  return ScalaJS.as.scala_collection_immutable_List(es.foldRight__O__Lscala_Function2__O(ScalaJS.modules.scala_collection_immutable_Nil(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(e, as) {
      var x1 = e;
      if (ScalaJS.is.scala_util_Left(x1)) {
        var x2 = ScalaJS.as.scala_util_Left(x1);
        var a = x2.a__O();
        var x$7 = a;
        return as.$$colon$colon__O__Lscala_collection_immutable_List(x$7)
      };
      if (ScalaJS.is.scala_util_Right(x1)) {
        return as
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })())))
});
ScalaJS.c.scala_collection_immutable_List$.prototype.rights__Lscala_collection_Iterable__Lscala_collection_immutable_List = (function(es) {
  return ScalaJS.as.scala_collection_immutable_List(es.foldRight__O__Lscala_Function2__O(ScalaJS.modules.scala_collection_immutable_Nil(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(e, bs) {
      var x1 = e;
      if (ScalaJS.is.scala_util_Left(x1)) {
        return bs
      };
      if (ScalaJS.is.scala_util_Right(x1)) {
        var x4 = ScalaJS.as.scala_util_Right(x1);
        var b = x4.b__O();
        var x$8 = b;
        return bs.$$colon$colon__O__Lscala_collection_immutable_List(x$8)
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })())))
});
ScalaJS.c.scala_collection_immutable_List$.prototype.separate__Lscala_collection_Iterable__Lscala_Tuple2 = (function(es) {
  return ScalaJS.as.scala_Tuple2(es.foldRight__O__Lscala_Function2__O(new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.modules.scala_collection_immutable_Nil(), ScalaJS.modules.scala_collection_immutable_Nil()), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(x0$2, x1$2) {
      var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(x0$2, x1$2);
      if ((x1 !== null)) {
        var p2 = ScalaJS.as.scala_util_Either(x1.$$und1__O());
        var p3 = ScalaJS.as.scala_Tuple2(x1.$$und2__O());
        if (ScalaJS.is.scala_util_Left(p2)) {
          var x4 = ScalaJS.as.scala_util_Left(p2);
          var a = x4.a__O();
          if ((p3 !== null)) {
            var lefts = ScalaJS.as.scala_collection_immutable_List(p3.$$und1__O());
            var rights = ScalaJS.as.scala_collection_immutable_List(p3.$$und2__O());
            var jsx$5 = new ScalaJS.c.scala_Tuple2();
            var x$9 = a;
            var jsx$4 = lefts.$$colon$colon__O__Lscala_collection_immutable_List(x$9);
            return jsx$5.init___O__O(jsx$4, rights)
          }
        }
      };
      if ((x1 !== null)) {
        var p5 = ScalaJS.as.scala_util_Either(x1.$$und1__O());
        var p6 = ScalaJS.as.scala_Tuple2(x1.$$und2__O());
        if (ScalaJS.is.scala_util_Right(p5)) {
          var x7 = ScalaJS.as.scala_util_Right(p5);
          var b = x7.b__O();
          if ((p6 !== null)) {
            var lefts$2 = ScalaJS.as.scala_collection_immutable_List(p6.$$und1__O());
            var rights$2 = ScalaJS.as.scala_collection_immutable_List(p6.$$und2__O());
            var jsx$8 = new ScalaJS.c.scala_Tuple2();
            var jsx$7 = lefts$2;
            var x$10 = b;
            var jsx$6 = rights$2.$$colon$colon__O__Lscala_collection_immutable_List(x$10);
            return jsx$8.init___O__O(jsx$7, jsx$6)
          }
        }
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })())))
});
ScalaJS.c.scala_collection_immutable_List$.prototype.fromIterator__Lscala_collection_Iterator__Lscala_collection_immutable_List = (function(it) {
  return it.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_List$.prototype.fromArray__O__Lscala_collection_immutable_List = (function(arr) {
  return this.fromArray__O__I__I__Lscala_collection_immutable_List(arr, 0, ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(arr))
});
ScalaJS.c.scala_collection_immutable_List$.prototype.fromArray__O__I__I__Lscala_collection_immutable_List = (function(arr, start, len) {
  var res = ScalaJS.modules.scala_collection_immutable_Nil();
  var i = (start + len);
  while ((i > start)) {
    i = (i - 1);
    var x$11 = ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(arr, i);
    res = res.$$colon$colon__O__Lscala_collection_immutable_List(x$11)
  };
  return res
});
ScalaJS.c.scala_collection_immutable_List$.prototype.map2__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lscala_Function2__Lscala_collection_immutable_List = (function(xs, ys, f) {
  var b = new ScalaJS.c.scala_collection_mutable_ListBuffer().init___();
  var xc = xs;
  var yc = ys;
  while (((!xc.isEmpty__Z()) && (!yc.isEmpty__Z()))) {
    b.$$plus$eq__O__Lscala_collection_mutable_ListBuffer(f.apply__O__O__O(xc.head__O(), yc.head__O()));
    xc = ScalaJS.as.scala_collection_immutable_List(xc.tail__O());
    yc = ScalaJS.as.scala_collection_immutable_List(yc.tail__O())
  };
  return b.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_List$.prototype.forall2__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lscala_Function2__Z = (function(xs, ys, f) {
  var xc = xs;
  var yc = ys;
  while (((!xc.isEmpty__Z()) && (!yc.isEmpty__Z()))) {
    if ((!ScalaJS.uZ(f.apply__O__O__O(xc.head__O(), yc.head__O())))) {
      return false
    };
    xc = ScalaJS.as.scala_collection_immutable_List(xc.tail__O());
    yc = ScalaJS.as.scala_collection_immutable_List(yc.tail__O())
  };
  return true
});
ScalaJS.c.scala_collection_immutable_List$.prototype.exists2__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lscala_Function2__Z = (function(xs, ys, f) {
  var xc = xs;
  var yc = ys;
  while (((!xc.isEmpty__Z()) && (!yc.isEmpty__Z()))) {
    if (ScalaJS.uZ(f.apply__O__O__O(xc.head__O(), yc.head__O()))) {
      return true
    };
    xc = ScalaJS.as.scala_collection_immutable_List(xc.tail__O());
    yc = ScalaJS.as.scala_collection_immutable_List(yc.tail__O())
  };
  return false
});
ScalaJS.c.scala_collection_immutable_List$.prototype.transpose__Lscala_collection_immutable_List__Lscala_collection_immutable_List = (function(xss) {
  var buf = new ScalaJS.c.scala_collection_mutable_ListBuffer().init___();
  var yss = xss;
  while ((!ScalaJS.as.scala_collection_SeqLike(yss.head__O()).isEmpty__Z())) {
    buf.$$plus$eq__O__Lscala_collection_mutable_ListBuffer(yss.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(x$12) {
        return x$12.head__O()
      })
    })()), this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
    yss = ScalaJS.as.scala_collection_immutable_List(yss.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(x$13) {
        return ScalaJS.as.scala_collection_immutable_List(x$13.tail__O())
      })
    })()), this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
  };
  return buf.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_List$.prototype.apply__Lscala_collection_Seq__Lscala_collection_GenTraversable = (function(elems) {
  return this.apply__Lscala_collection_Seq__Lscala_collection_immutable_List(elems)
});
ScalaJS.c.scala_collection_immutable_List$.prototype.empty__Lscala_collection_GenTraversable = (function() {
  return this.empty__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_List$.prototype.transpose__Lscala_collection_immutable_List__ = (function(xss) {
  return this.transpose__Lscala_collection_immutable_List__Lscala_collection_immutable_List(xss)
});
ScalaJS.c.scala_collection_immutable_List$.prototype.exists2__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lscala_Function2__ = (function(xs, ys, f) {
  return ScalaJS.bZ(this.exists2__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lscala_Function2__Z(xs, ys, f))
});
ScalaJS.c.scala_collection_immutable_List$.prototype.forall2__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lscala_Function2__ = (function(xs$2, ys$2, f$2) {
  return ScalaJS.bZ(this.forall2__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lscala_Function2__Z(xs$2, ys$2, f$2))
});
ScalaJS.c.scala_collection_immutable_List$.prototype.map2__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lscala_Function2__ = (function(xs$3, ys$3, f$3) {
  return this.map2__Lscala_collection_immutable_List__Lscala_collection_immutable_List__Lscala_Function2__Lscala_collection_immutable_List(xs$3, ys$3, f$3)
});
ScalaJS.c.scala_collection_immutable_List$.prototype.fromArray__O__I__I__ = (function(arr, start, len) {
  return this.fromArray__O__I__I__Lscala_collection_immutable_List(arr, start, len)
});
ScalaJS.c.scala_collection_immutable_List$.prototype.fromArray__O__ = (function(arr$2) {
  return this.fromArray__O__Lscala_collection_immutable_List(arr$2)
});
ScalaJS.c.scala_collection_immutable_List$.prototype.fromIterator__Lscala_collection_Iterator__ = (function(it) {
  return this.fromIterator__Lscala_collection_Iterator__Lscala_collection_immutable_List(it)
});
ScalaJS.c.scala_collection_immutable_List$.prototype.separate__Lscala_collection_Iterable__ = (function(es) {
  return this.separate__Lscala_collection_Iterable__Lscala_Tuple2(es)
});
ScalaJS.c.scala_collection_immutable_List$.prototype.rights__Lscala_collection_Iterable__ = (function(es$2) {
  return this.rights__Lscala_collection_Iterable__Lscala_collection_immutable_List(es$2)
});
ScalaJS.c.scala_collection_immutable_List$.prototype.lefts__Lscala_collection_Iterable__ = (function(es$3) {
  return this.lefts__Lscala_collection_Iterable__Lscala_collection_immutable_List(es$3)
});
ScalaJS.c.scala_collection_immutable_List$.prototype.unzip__Lscala_collection_Iterable__ = (function(xs$4) {
  return this.unzip__Lscala_collection_Iterable__Lscala_Tuple2(xs$4)
});
ScalaJS.c.scala_collection_immutable_List$.prototype.unzip__Lscala_collection_immutable_List__ = (function(xs$5) {
  return this.unzip__Lscala_collection_immutable_List__Lscala_Tuple2(xs$5)
});
ScalaJS.c.scala_collection_immutable_List$.prototype.flatten__Lscala_collection_immutable_List__ = (function(xss$2) {
  return this.flatten__Lscala_collection_immutable_List__Lscala_collection_immutable_List(xss$2)
});
ScalaJS.c.scala_collection_immutable_List$.prototype.make__I__O__ = (function(n, elem) {
  return this.make__I__O__Lscala_collection_immutable_List(n, elem)
});
ScalaJS.c.scala_collection_immutable_List$.prototype.range__I__I__Lscala_Function1__ = (function(start$2, end, step) {
  return this.range__I__I__Lscala_Function1__Lscala_collection_immutable_List(start$2, end, step)
});
ScalaJS.c.scala_collection_immutable_List$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_List$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_List$.prototype = ScalaJS.c.scala_collection_immutable_List$.prototype;
ScalaJS.is.scala_collection_immutable_List$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_List$)))
});
ScalaJS.as.scala_collection_immutable_List$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_List$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.List")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_List$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_List$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_List$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_List$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_List$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_List$: 0
}, false, "scala.collection.immutable.List$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_immutable_List$: 1,
  scala_collection_generic_SeqFactory: 1,
  scala_collection_generic_TraversableFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSeqFactory: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_List$.prototype.$classData = ScalaJS.data.scala_collection_immutable_List$;
ScalaJS.moduleInstances.scala_collection_immutable_List = undefined;
ScalaJS.modules.scala_collection_immutable_List = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_List)) {
    ScalaJS.moduleInstances.scala_collection_immutable_List = new ScalaJS.c.scala_collection_immutable_List$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_List
});
//@ sourceMappingURL=List$.js.map

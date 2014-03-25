ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__isEmpty__Lscala_collection_mutable_LinkedListLike__Z = (function($$this) {
  return ($$this.next__Lscala_collection_mutable_Seq() === $$this)
});
ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__length__Lscala_collection_mutable_LinkedListLike__I = (function($$this) {
  return ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__length0__Lscala_collection_mutable_LinkedListLike__Lscala_collection_mutable_Seq__I__I($$this, ScalaJS.as.scala_collection_mutable_Seq($$this.repr__O()), 0)
});
ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__length0__Lscala_collection_mutable_LinkedListLike__Lscala_collection_mutable_Seq__I__I = (function($$this, elem, acc) {
  tailCallLoop: while (true) {
    if (ScalaJS.as.scala_collection_mutable_LinkedListLike(elem).isEmpty__Z()) {
      return acc
    } else {
      var temp$elem = ScalaJS.as.scala_collection_mutable_LinkedListLike(elem).next__Lscala_collection_mutable_Seq();
      var temp$acc = (acc + 1);
      elem = temp$elem;
      acc = temp$acc;
      continue tailCallLoop
    }
  }
});
ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__head__Lscala_collection_mutable_LinkedListLike__O = (function($$this) {
  if ($$this.isEmpty__Z()) {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___()
  } else {
    return $$this.elem__O()
  }
});
ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__tail__Lscala_collection_mutable_LinkedListLike__Lscala_collection_mutable_Seq = (function($$this) {
  ScalaJS.modules.scala_Predef().require__Z__Lscala_Function0__V($$this.nonEmpty__Z(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return "tail of empty list"
    })
  })()));
  return $$this.next__Lscala_collection_mutable_Seq()
});
ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__append__Lscala_collection_mutable_LinkedListLike__Lscala_collection_mutable_Seq__Lscala_collection_mutable_Seq = (function($$this, that) {
  if ($$this.isEmpty__Z()) {
    return that
  } else {
    ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__loop$1__Lscala_collection_mutable_LinkedListLike__Lscala_collection_mutable_Seq__Lscala_collection_mutable_Seq__V($$this, ScalaJS.as.scala_collection_mutable_Seq($$this.repr__O()), that);
    return ScalaJS.as.scala_collection_mutable_Seq($$this.repr__O())
  }
});
ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__insert__Lscala_collection_mutable_LinkedListLike__Lscala_collection_mutable_Seq__V = (function($$this, that) {
  ScalaJS.modules.scala_Predef().require__Z__Lscala_Function0__V($$this.nonEmpty__Z(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return "insert into empty list"
    })
  })()));
  if (that.nonEmpty__Z()) {
    ScalaJS.as.scala_collection_mutable_LinkedListLike(that).append__Lscala_collection_mutable_Seq__Lscala_collection_mutable_Seq($$this.next__Lscala_collection_mutable_Seq());
    $$this.next$und$eq__Lscala_collection_mutable_Seq__V(that)
  }
});
ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__drop__Lscala_collection_mutable_LinkedListLike__I__Lscala_collection_mutable_Seq = (function($$this, n) {
  var i = 0;
  var these = ScalaJS.as.scala_collection_mutable_Seq($$this.repr__O());
  while (((i < n) && (!ScalaJS.as.scala_collection_mutable_LinkedListLike(these).isEmpty__Z()))) {
    these = ScalaJS.as.scala_collection_mutable_LinkedListLike(these).next__Lscala_collection_mutable_Seq();
    i = (i + 1)
  };
  return these
});
ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__atLocation__Lscala_collection_mutable_LinkedListLike__I__Lscala_Function1__O = (function($$this, n, f) {
  var loc = $$this.drop__I__Lscala_collection_mutable_Seq(n);
  if (loc.nonEmpty__Z()) {
    return f.apply__O__O(loc)
  } else {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(n)))
  }
});
ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__apply__Lscala_collection_mutable_LinkedListLike__I__O = (function($$this, n) {
  return ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__atLocation__Lscala_collection_mutable_LinkedListLike__I__Lscala_Function1__O($$this, n, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      return ScalaJS.as.scala_collection_mutable_LinkedListLike(x$1).elem__O()
    })
  })()))
});
ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__update__Lscala_collection_mutable_LinkedListLike__I__O__V = (function($$this, n, x) {
  ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__atLocation__Lscala_collection_mutable_LinkedListLike__I__Lscala_Function1__O($$this, n, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(x$3) {
    return (function(x$2) {
      ScalaJS.as.scala_collection_mutable_LinkedListLike(x$2).elem$und$eq__O__V(x$3);
      return ScalaJS.bV(undefined)
    })
  })(x)))
});
ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__get__Lscala_collection_mutable_LinkedListLike__I__Lscala_Option = (function($$this, n) {
  var loc = $$this.drop__I__Lscala_collection_mutable_Seq(n);
  if (loc.nonEmpty__Z()) {
    return new ScalaJS.c.scala_Some().init___O(ScalaJS.as.scala_collection_mutable_LinkedListLike(loc).elem__O())
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__iterator__Lscala_collection_mutable_LinkedListLike__Lscala_collection_Iterator = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_LinkedListLike$$anon$1().init___Lscala_collection_mutable_LinkedListLike($$this)
});
ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__foreach__Lscala_collection_mutable_LinkedListLike__Lscala_Function1__V = (function($$this, f) {
  var these = $$this;
  while (these.nonEmpty__Z()) {
    f.apply__O__O(these.elem__O());
    these = ScalaJS.as.scala_collection_mutable_LinkedListLike(these.next__Lscala_collection_mutable_Seq())
  }
});
ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__clone__Lscala_collection_mutable_LinkedListLike__Lscala_collection_mutable_Seq = (function($$this) {
  var bf = $$this.newBuilder__Lscala_collection_mutable_Builder();
  bf.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable($$this);
  return ScalaJS.as.scala_collection_mutable_Seq(bf.result__O())
});
ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__loop$1__Lscala_collection_mutable_LinkedListLike__Lscala_collection_mutable_Seq__Lscala_collection_mutable_Seq__V = (function($$this, x, that$1) {
  tailCallLoop: while (true) {
    if (ScalaJS.as.scala_collection_mutable_LinkedListLike(ScalaJS.as.scala_collection_mutable_LinkedListLike(x).next__Lscala_collection_mutable_Seq()).isEmpty__Z()) {
      ScalaJS.as.scala_collection_mutable_LinkedListLike(x).next$und$eq__Lscala_collection_mutable_Seq__V(that$1);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    } else {
      x = ScalaJS.as.scala_collection_mutable_LinkedListLike(x).next__Lscala_collection_mutable_Seq();
      continue tailCallLoop;
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    };
    return undefined
  }
});
ScalaJS.impls.scala_collection_mutable_LinkedListLike$class__$init$__Lscala_collection_mutable_LinkedListLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=LinkedListLike$class.js.map

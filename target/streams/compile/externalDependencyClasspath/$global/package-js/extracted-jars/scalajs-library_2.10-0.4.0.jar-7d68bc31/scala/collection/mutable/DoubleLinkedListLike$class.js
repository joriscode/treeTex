ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__append__Lscala_collection_mutable_DoubleLinkedListLike__Lscala_collection_mutable_Seq__Lscala_collection_mutable_Seq = (function($$this, that) {
  if ($$this.isEmpty__Z()) {
    return that
  } else {
    if (ScalaJS.as.scala_collection_mutable_LinkedListLike($$this.next__Lscala_collection_mutable_Seq()).isEmpty__Z()) {
      $$this.next$und$eq__Lscala_collection_mutable_Seq__V(that);
      if (that.nonEmpty__Z()) {
        ScalaJS.as.scala_collection_mutable_DoubleLinkedListLike(that).prev$und$eq__Lscala_collection_mutable_Seq__V(ScalaJS.as.scala_collection_mutable_Seq($$this.repr__O()))
      };
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    } else {
      ScalaJS.as.scala_collection_mutable_DoubleLinkedListLike($$this.next__Lscala_collection_mutable_Seq()).append__Lscala_collection_mutable_Seq__Lscala_collection_mutable_Seq(that)
    };
    return ScalaJS.as.scala_collection_mutable_Seq($$this.repr__O())
  }
});
ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__insert__Lscala_collection_mutable_DoubleLinkedListLike__Lscala_collection_mutable_Seq__V = (function($$this, that) {
  $$this.scala$collection$mutable$DoubleLinkedListLike$$super$insert__Lscala_collection_mutable_Seq__V(that);
  if (that.nonEmpty__Z()) {
    ScalaJS.as.scala_collection_mutable_DoubleLinkedListLike(that).prev$und$eq__Lscala_collection_mutable_Seq__V(ScalaJS.as.scala_collection_mutable_Seq($$this.repr__O()))
  }
});
ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__remove__Lscala_collection_mutable_DoubleLinkedListLike__V = (function($$this) {
  if ($$this.nonEmpty__Z()) {
    ScalaJS.as.scala_collection_mutable_DoubleLinkedListLike($$this.next__Lscala_collection_mutable_Seq()).prev$und$eq__Lscala_collection_mutable_Seq__V($$this.prev__Lscala_collection_mutable_Seq());
    if (($$this.prev__Lscala_collection_mutable_Seq() !== null)) {
      ScalaJS.as.scala_collection_mutable_LinkedListLike($$this.prev__Lscala_collection_mutable_Seq()).next$und$eq__Lscala_collection_mutable_Seq__V($$this.next__Lscala_collection_mutable_Seq())
    }
  }
});
ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__atLocation__Lscala_collection_mutable_DoubleLinkedListLike__I__Lscala_Function1__Lscala_Function0__O = (function($$this, n, f, onOutOfBounds) {
  if ($$this.isEmpty__Z()) {
    return onOutOfBounds.apply__O()
  } else {
    var loc = ScalaJS.as.scala_collection_mutable_Seq($$this.repr__O());
    var left = n;
    while ((left > 0)) {
      loc = ScalaJS.as.scala_collection_mutable_LinkedListLike(loc).next__Lscala_collection_mutable_Seq();
      left = (left - 1);
      if (ScalaJS.as.scala_collection_mutable_LinkedListLike(loc).isEmpty__Z()) {
        onOutOfBounds.apply__O()
      } else {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    };
    return f.apply__O__O(loc)
  }
});
ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__scala$collection$mutable$DoubleLinkedListLike$$outofbounds__Lscala_collection_mutable_DoubleLinkedListLike__I__Lscala_Nothing = (function($$this, n) {
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(n)))
});
ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__drop__Lscala_collection_mutable_DoubleLinkedListLike__I__Lscala_collection_mutable_Seq = (function($$this, n) {
  return ScalaJS.as.scala_collection_mutable_Seq(ScalaJS.impls.scala_collection_IterableLike$class__drop__Lscala_collection_IterableLike__I__O($$this, n))
});
ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__tail__Lscala_collection_mutable_DoubleLinkedListLike__Lscala_collection_mutable_Seq = (function($$this) {
  return $$this.drop__I__Lscala_collection_mutable_Seq(1)
});
ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__apply__Lscala_collection_mutable_DoubleLinkedListLike__I__O = (function($$this, n) {
  return ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__atLocation__Lscala_collection_mutable_DoubleLinkedListLike__I__Lscala_Function1__Lscala_Function0__O($$this, n, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      return ScalaJS.as.scala_collection_mutable_LinkedListLike(x$1).elem__O()
    })
  })()), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, n$1) {
    return (function() {
      return ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__scala$collection$mutable$DoubleLinkedListLike$$outofbounds__Lscala_collection_mutable_DoubleLinkedListLike__I__Lscala_Nothing(arg$outer, n$1)
    })
  })($$this, n)))
});
ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__update__Lscala_collection_mutable_DoubleLinkedListLike__I__O__V = (function($$this, n, x) {
  ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__atLocation__Lscala_collection_mutable_DoubleLinkedListLike__I__Lscala_Function1__Lscala_Function0__O($$this, n, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(x$3) {
    return (function(x$2) {
      ScalaJS.as.scala_collection_mutable_LinkedListLike(x$2).elem$und$eq__O__V(x$3);
      return ScalaJS.bV(undefined)
    })
  })(x)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, n$2) {
    return (function() {
      return ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__scala$collection$mutable$DoubleLinkedListLike$$outofbounds__Lscala_collection_mutable_DoubleLinkedListLike__I__Lscala_Nothing(arg$outer, n$2)
    })
  })($$this, n)))
});
ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__get__Lscala_collection_mutable_DoubleLinkedListLike__I__Lscala_Option = (function($$this, n) {
  return ScalaJS.as.scala_Option(ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__atLocation__Lscala_collection_mutable_DoubleLinkedListLike__I__Lscala_Function1__Lscala_Function0__O($$this, n, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x) {
      return new ScalaJS.c.scala_Some().init___O(ScalaJS.as.scala_collection_mutable_LinkedListLike(x).elem__O())
    })
  })()), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return ScalaJS.modules.scala_None()
    })
  })())))
});
ScalaJS.impls.scala_collection_mutable_DoubleLinkedListLike$class__$init$__Lscala_collection_mutable_DoubleLinkedListLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=DoubleLinkedListLike$class.js.map

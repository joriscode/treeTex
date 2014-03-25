ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__interruptibly__Lscala_xml_pull_ProducerConsumerIterator__Lscala_Function0__Lscala_Option = (function($$this, body$2) {
  try {
    return new ScalaJS.c.scala_Some().init___O(body$2.apply__O())
  } catch ($jsexc$) {
    if (ScalaJS.is.java_lang_InterruptedException($jsexc$)) {
      ScalaJS.modules.java_lang_Thread().currentThread__Ljava_lang_Thread().interrupt__V();
      return ScalaJS.modules.scala_None()
    } else {
      if (ScalaJS.is.java_nio_channels_ClosedChannelException($jsexc$)) {
        return ScalaJS.modules.scala_None()
      } else {
        throw $jsexc$
      }
    }
  }
});
ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__scala$xml$pull$ProducerConsumerIterator$$queue__Lscala_xml_pull_ProducerConsumerIterator__Ljava_util_concurrent_LinkedBlockingQueue = (function($$this) {
  if (($$this.MaxQueueSize__I() < 0)) {
    return new ScalaJS.c.java_util_concurrent_LinkedBlockingQueue().init___()
  } else {
    return new ScalaJS.c.java_util_concurrent_LinkedBlockingQueue().init___I($$this.MaxQueueSize__I())
  }
});
ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__fillBuffer__Lscala_xml_pull_ProducerConsumerIterator__Z = (function($$this) {
  $$this.scala$xml$pull$ProducerConsumerIterator$$buffer$und$eq__O__V($$this.interruptibly__Lscala_Function0__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return arg$outer.scala$xml$pull$ProducerConsumerIterator$$queue__Ljava_util_concurrent_LinkedBlockingQueue().take__O()
    })
  })($$this))).getOrElse__Lscala_Function0__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return arg$outer.EndOfStream__O()
    })
  })($$this))));
  return ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__isElement__Lscala_xml_pull_ProducerConsumerIterator__O__Z($$this, $$this.scala$xml$pull$ProducerConsumerIterator$$buffer__O())
});
ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__isElement__Lscala_xml_pull_ProducerConsumerIterator__O__Z = (function($$this, x) {
  return ((!ScalaJS.anyRefEqEq(x, null)) && (!ScalaJS.anyEqEq(x, $$this.EndOfStream__O())))
});
ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__eos__Lscala_xml_pull_ProducerConsumerIterator__Z = (function($$this) {
  return ScalaJS.anyEqEq($$this.scala$xml$pull$ProducerConsumerIterator$$buffer__O(), $$this.EndOfStream__O())
});
ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__produce__Lscala_xml_pull_ProducerConsumerIterator__O__V = (function($$this, x) {
  if ((!ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__eos__Lscala_xml_pull_ProducerConsumerIterator__Z($$this))) {
    $$this.interruptibly__Lscala_Function0__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, x$1) {
      return (function() {
        arg$outer.scala$xml$pull$ProducerConsumerIterator$$queue__Ljava_util_concurrent_LinkedBlockingQueue().put__O__V(x$1);
        return ScalaJS.bV(undefined)
      })
    })($$this, x)))
  }
});
ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__hasNext__Lscala_xml_pull_ProducerConsumerIterator__Z = (function($$this) {
  return ((!ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__eos__Lscala_xml_pull_ProducerConsumerIterator__Z($$this)) && ((!ScalaJS.anyRefEqEq($$this.scala$xml$pull$ProducerConsumerIterator$$buffer__O(), null)) || ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__fillBuffer__Lscala_xml_pull_ProducerConsumerIterator__Z($$this)))
});
ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__next__Lscala_xml_pull_ProducerConsumerIterator__O = (function($$this) {
  if (ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__eos__Lscala_xml_pull_ProducerConsumerIterator__Z($$this)) {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___T("ProducerConsumerIterator")
  };
  if (ScalaJS.anyRefEqEq($$this.scala$xml$pull$ProducerConsumerIterator$$buffer__O(), null)) {
    ScalaJS.bZ(ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__fillBuffer__Lscala_xml_pull_ProducerConsumerIterator__Z($$this))
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  return ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__drainBuffer__Lscala_xml_pull_ProducerConsumerIterator__O($$this)
});
ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__available__Lscala_xml_pull_ProducerConsumerIterator__Z = (function($$this) {
  return (ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__isElement__Lscala_xml_pull_ProducerConsumerIterator__O__Z($$this, $$this.scala$xml$pull$ProducerConsumerIterator$$buffer__O()) || ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__isElement__Lscala_xml_pull_ProducerConsumerIterator__O__Z($$this, $$this.scala$xml$pull$ProducerConsumerIterator$$queue__Ljava_util_concurrent_LinkedBlockingQueue().peek__O()))
});
ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__drainBuffer__Lscala_xml_pull_ProducerConsumerIterator__O = (function($$this) {
  ScalaJS.modules.scala_Predef().assert__Z__V((!ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__eos__Lscala_xml_pull_ProducerConsumerIterator__Z($$this)));
  var res = $$this.scala$xml$pull$ProducerConsumerIterator$$buffer__O();
  $$this.scala$xml$pull$ProducerConsumerIterator$$buffer$und$eq__O__V(null);
  return res
});
ScalaJS.impls.scala_xml_pull_ProducerConsumerIterator$class__$init$__Lscala_xml_pull_ProducerConsumerIterator__V = (function($$this) {
  $$this.scala$xml$pull$ProducerConsumerIterator$$undsetter$und$MaxQueueSize$und$eq__I__V(-1)
});
//@ sourceMappingURL=ProducerConsumerIterator$class.js.map
